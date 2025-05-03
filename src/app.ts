interface Task {
    name: string;
    file: string;
}
interface TaskListItem extends HTMLLIElement {
    file: string;
}

// AppState
interface AppState {
    currentPage: number,
    isLoading: boolean,
    hasMoreTasks: boolean,
    allTasks: Task[],
    filteredTasks: Task[],
    isAscending: boolean,
    activeTaskFile: string | null
}

// api url
const TASKS_PER_PAGE : number = 10;
const API_MAIN_URL : string = '/api';

// state management
let state : AppState = {
    currentPage: 1,
    isLoading: false,
    hasMoreTasks: true,
    allTasks: [] as Task[],
    filteredTasks: [] as Task[],
    isAscending: true,
    activeTaskFile: null as string | null
};

// DOM Elements
const elements = {
    taskList: document.getElementById('tasklist') as HTMLUListElement,
    welcomeContainer: document.getElementById('welcome-container') as HTMLDivElement,
    taskIframe: document.getElementById('taskiframe') as HTMLIFrameElement,
    sidebar: document.getElementById('sidebar') as HTMLDivElement,
    toggleBtn: document.getElementById('toggle-btn') as HTMLButtonElement,
    taskListContainer: document.getElementById('tasklist-container') as HTMLElement,
    searchInput: document.getElementById('search-bar') as HTMLInputElement,
    sortButton: document.getElementById('sorting') as HTMLButtonElement
};

// Initialize the app
function init() {
    if (!validateElements()) return;
    elements.toggleBtn.addEventListener('click', toggleSidebar);
    elements.taskListContainer.addEventListener('scroll', handleScroll);
    elements.sortButton.addEventListener('click', sortTasks);
    elements.searchInput.addEventListener('input', searchTasks);
    loadTaskFromQuery();
    loadInitialTasks();
}

// check if all object values are exist or missing.
function validateElements(): boolean {
    return Object.values(elements).every(element => element !== null);
}

// Sidebar toggle
function toggleSidebar() {
    elements.sidebar.classList.toggle('collapsed');
}

// Fetch tasks from Json API
async function fetchTasks(page: number = 1, limit: number = TASKS_PER_PAGE): Promise<Task[]> {
    try {
        const response = await fetch(`${API_MAIN_URL}/initialTasks?_page=${page}&_limit=${limit}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}

// Load initial tasks
async function loadInitialTasks() {
    state.allTasks = await fetchTasks(state.currentPage, TASKS_PER_PAGE);
    renderTasks(state.allTasks);
    updateUI();
}

// Load more tasks on scroll
async function loadMoreTasks() {
    if (state.isLoading || !state.hasMoreTasks) return;

    state.isLoading = true;
    const loader = createLoader();
    elements.taskList.appendChild(loader);

    try {
        const newTasks = await fetchTasks(state.currentPage + 1, TASKS_PER_PAGE);
        state.hasMoreTasks = newTasks.length === TASKS_PER_PAGE;
        await new Promise(resolve => setTimeout(resolve, 900));
        loader.remove();
        if (newTasks.length > 0) {
            state.currentPage++;
            state.allTasks = [...state.allTasks, ...newTasks];
            renderTasks(newTasks);
        }
        if (!state.hasMoreTasks) showNoMoreTasksMessage();
    } catch (error) {
        console.error('Error loading more tasks:', error);
    } finally {
        state.isLoading = false;
    }
}

function showNoMoreTasksMessage() {
    const message = document.createElement('li');
    message.className = 'end-tasks';
    message.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; cursor: default">
            <span style="color: #F46275; font-size: 19px; padding:4px; font-weight: 400;">No more tasks to load</span>
        </div>
    `;
    elements.taskList.appendChild(message);
}

// Create loader element
function createLoader(): HTMLDivElement {
    const loader = document.createElement('div');
    loader.className = 'loader-container';
    loader.innerHTML = `
        <div class="loader">
            <div class="loader-cirlce"></div>
            <div class="loader-cirlce"></div>
            <div class="loader-cirlce"></div>
            <div class="loader-cirlce"></div>
        </div>
    `;
    return loader;
}

// Render tasks to the DOM
function renderTasks(tasks: Task[]) {
    if (tasks.length === 0) {
        elements.taskList.innerHTML = `
            <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
                <img src="/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
                <span style="color: #F46275; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
            </li>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();
    tasks.forEach(task => {
        const listItem = document.createElement('li') as TaskListItem;
        listItem.textContent = task.name;
        listItem.file = task.file;
        if (task.file === state.activeTaskFile) listItem.classList.add('active');
        listItem.addEventListener('click', () => selectTask(task.file, listItem));
        fragment.appendChild(listItem);
    });
    elements.taskList.appendChild(fragment);
}

// Handle task selection
function selectTask(file: string, listItem: HTMLLIElement) {
    state.activeTaskFile = file;
    elements.taskIframe.src = file;
    elements.taskIframe.classList.add('active');
    elements.welcomeContainer.classList.remove('active');
    setActiveTask(listItem);
    updateURL();
}

// Set active task styling
function setActiveTask(selectedItem: HTMLLIElement) {
    document.querySelectorAll<HTMLLIElement>('#tasklist li').forEach(item => {
        item.classList.remove('active');
    });
    selectedItem.classList.add('active');
}

// Sort tasks
function sortTasks() {
    state.isAscending = !state.isAscending;
    const tasksToSort = state.filteredTasks.length > 0 ? state.filteredTasks : state.allTasks;
    
    tasksToSort.sort((a, b) => 
        state.isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    elements.taskList.innerHTML = '';
    renderTasks(tasksToSort);
    
    elements.sortButton.classList.toggle('sort-asc', state.isAscending);
    elements.sortButton.classList.toggle('sort-desc', !state.isAscending);
    elements.sortButton.textContent = state.isAscending ? "Ascending" : "Descending";
    
    updateURL();
}

// Search tasks
function searchTasks() {
    const searchTerm = elements.searchInput.value.trim().toLowerCase();
    state.isAscending = false;
    
    state.filteredTasks = state.allTasks.filter(task => {
        const name = task.name.toLowerCase();
        const file = task.file.toLowerCase();
        const wordRegex = new RegExp(`\\b${searchTerm}\\b`, 'i');
        return wordRegex.test(name) || wordRegex.test(file);
    });

    elements.taskList.innerHTML = '';
    renderTasks(state.filteredTasks);
    updateURL();
}

// Update URL with current state
function updateURL() {
    const url = new URL(window.location.href);
    if (state.activeTaskFile) {
        url.searchParams.set('task', state.activeTaskFile);
    } else {
        url.searchParams.delete('task');
    }
    history.pushState({ task: state.activeTaskFile }, '', url);
}

// Load task from URL query
function loadTaskFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    
    if (taskFile) {
        state.activeTaskFile = taskFile;
        elements.taskIframe.src = taskFile;
        elements.taskIframe.classList.add('active');
        elements.welcomeContainer.classList.remove('active');
    }
}

// Handle scroll for infinite loading
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = elements.taskListContainer;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMoreTasks();
    }
}

// Update UI based on state
function updateUI() {
    if (state.activeTaskFile) {
        elements.taskIframe.classList.add('active');
        elements.welcomeContainer.classList.remove('active');
    } else {
        elements.taskIframe.classList.remove('active');
        elements.welcomeContainer.classList.add('active');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);