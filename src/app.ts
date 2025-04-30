// task structure
interface Task {
    name : string,
    file : string,
}

interface TaskListItem extends HTMLLIElement {
    file : string,
}

// global state variables
let currentSearchFilteredTasks : Task[] = [];
let isAscending : boolean = true;
let currentActiveTaskFile : string | null  = null;

// scroll pagination variables
let currentpage : number = 1;
const tasksperPage : number = 10;
let isloading : boolean = false;
let ismoreTasks : boolean = true;
let allTasks : Task[] = [];

//json api url
const api_main_url = '/api';

// DOM vairables
const sidebar = document.getElementById('sidebar') as HTMLDivElement | null
const ul = document.getElementById('tasklist') as HTMLUListElement | null
const button = document.getElementById('sorting') as HTMLButtonElement | null
const toggleBtn = document.getElementById('toggle-btn') as HTMLButtonElement | null
const searchInput = document.getElementById('search-bar') as HTMLInputElement | null
const welcomeContainer = document.getElementById('welcome-container') as HTMLDivElement | null
const taskIframe = document.getElementById('taskiframe') as HTMLIFrameElement | HTMLImageElement | null
const tasklistContainer = document.getElementById('tasklist-container') as HTMLElement

// check if not missing element
if(!ul || !button || !toggleBtn || !searchInput || !welcomeContainer || !taskIframe || !tasklistContainer){
    throw new Error('Missing Element in DOM')
}

// dom loaded
document.addEventListener('DOMContentLoaded', () => {
    if(!sidebar) return
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // if class is preset then true while false
        toggleBtn.setAttribute('aria-expanded', String(!sidebar.classList.contains('collapsed')));
    });
    tasklistContainer.addEventListener('scroll', handleScroll);
    loadTaskFromQuery();
    sortingSidebarLinks();
    SearchTasks();
    
});

// handle scroll 
function handleScroll(this : HTMLElement) {
    const { scrollTop, scrollHeight, clientHeight } = tasklistContainer
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMoretasks();
    }
}

// create loader
function createLoader() : HTMLDivElement{
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

// loads more tasks
async function loadMoretasks() : Promise<void>{
    if (isloading || !ismoreTasks || !ul) return;
    isloading = true;

    const loader = createLoader();
    ul.appendChild(loader);

    const loadingTime = new Promise<void>(resolve => setTimeout(resolve, 900));

    try {
        let tasksToAdd = [];
        tasksToAdd = await fetchAllData(currentpage + 1, tasksperPage);
        ismoreTasks = tasksToAdd.length === tasksperPage;

        await loadingTime;

        if (tasksToAdd.length > 0) {
            currentpage++;
            loader.remove();
            renderTaskList(tasksToAdd);

            if (!currentSearchFilteredTasks.length) {
                allTasks = [...allTasks, ...tasksToAdd];
            }
        }
    } catch (error) {
        console.error('not more loading tasks :', error);
    } finally {
        isloading = false;
        if (!ismoreTasks && currentpage > 1 && tasklistContainer) {
            const message = document.createElement('li');
            message.className = 'end-tasks';
            message.style.listStyle = "none"
            message.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; cursor: default">
                    <span style="color: #F46275; font-size: 19px; padding:4px; font-weight: 400;">No more tasks to load</span>
                </div>
            `;
            ul.appendChild(message);
        }
    }
}

// fetches data from json server
async function fetchAllData(page  : number = 1, limit : number = tasksperPage) :Promise<Task[]> {
    try {
        const response = await fetch(`${api_main_url}/initialTasks?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json() as Task[];
    } catch (error) {
        console.error("Error fetching all data:", error);
        return [];
    }
}

// show tasklist
async function showTaskLists() : Promise<void>{
    if(!ul || !taskIframe || !welcomeContainer) return
    const tasks = await fetchAllData(currentpage, tasksperPage);
    allTasks = tasks;
    renderTaskList(tasks);

    if (currentActiveTaskFile) {
        taskIframe.src = currentActiveTaskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    } else {
        taskIframe.classList.remove('active');
        welcomeContainer.classList.add('active');
    }
}

// set tasks and messages show
function renderTaskList(tasks : Task[]) : void {
    if(!ul) return
    // when server off the show tasks not loaded from json server
    if (tasks.length === 0 && currentpage === 1) {
        ul.innerHTML = `
            <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
                <img src="/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
                <span style="color: #F46275; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
            </li>
        `;
        return;
    }
    tasks.forEach(task => {
        const listItem = document.createElement('li') as TaskListItem;
        listItem.textContent = task.name;
        listItem.file = task.file;

        // when sorted the page then active file show in page 
        if (task.file === currentActiveTaskFile) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', () => {
            if(!taskIframe || !welcomeContainer) return
            currentActiveTaskFile = task.file;
            taskIframe.src = task.file;
            taskIframe.classList.add('active');
            welcomeContainer.classList.remove('active');
            updateURL();
            setActiveTask(listItem);
        });

        ul.appendChild(listItem);
    });
}

// active task file
function setActiveTask(selectedItem : HTMLLIElement) : void {
    const allItems = document.querySelectorAll<HTMLLIElement>('#tasklist li');
    allItems.forEach(item => item.classList.remove('active'));
    selectedItem.classList.add('active');
}

// tasks sorting
function sortingSidebarLinks() : void {
    if(!button || !ul) return
    button.addEventListener('click', () => {
        isAscending = !isAscending;

        if (currentSearchFilteredTasks.length > 0) {
            currentSearchFilteredTasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            // just thses tasks show then sorted for serach
            ul.innerHTML = ""
            renderTaskList(currentSearchFilteredTasks);
        } else {
            allTasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            // all tasks scroll then sorted the ul reset and not again tasks add
            ul.innerHTML = ""
            renderTaskList(allTasks);
        }
        if (isAscending) {
            button.classList.remove('sort-desc');
            button.classList.add('sort-asc');
            button.textContent = "Ascending";
        } else {
            button.classList.remove('sort-asc');
            button.classList.add('sort-desc');
            button.textContent = "Descending";
        }
        updateURL();
    });
}

// search tasks
function SearchTasks() : void{
    if(!searchInput || !ul) return
    searchInput.addEventListener('input', () => {
        const inputSearchValue = searchInput.value.trim().toLowerCase();

        // when search close then render page 1 
        currentpage = 1;
        isAscending = false;

        ul.innerHTML = ""

        // when serach tasks not show then reload all tasks page 1 show
        if (inputSearchValue === "") {
            currentSearchFilteredTasks = [];
            showTaskLists()
            return;
        }

        // tasks search words by words in regExp
        currentSearchFilteredTasks = allTasks.filter(task => {
            const name = task.name.toLowerCase();
            const file = task.file.toLowerCase();
            const wordRegex = new RegExp(`\\b${inputSearchValue}\\b`, 'i');
            return wordRegex.test(name) || wordRegex.test(file);
        });

        renderTaskList(currentSearchFilteredTasks);
        updateURL();
    });
}

// update URL
function updateURL() :void {
    const url = new URL(window.location.href);
    if (currentActiveTaskFile) {
        url.searchParams.set('task', currentActiveTaskFile);
    } else {
        url.searchParams.delete('task');
    }
    history.pushState({ task: currentActiveTaskFile }, '', url);
}

// loads task from URL query parameter
function loadTaskFromQuery() : void{
    if(!taskIframe || !welcomeContainer) return
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    if (taskFile) {
        currentActiveTaskFile = taskFile;
        taskIframe.src = taskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    }
    showTaskLists();

    if (taskFile) {
        const listItems = document.querySelectorAll<TaskListItem>('#tasklist li');
        listItems.forEach(li => {
            if (li.file === taskFile) {
                setActiveTask(li);
            }
        });
    }
}

