let currentFilteredTasks = [];
let isAscending = true;
let currentPage = 1;
let currentActiveTaskFile = null;
const defaultTasksPerPage = 10;
let totalTaskCount = 0;

// Cache objects
let allTasksCache = null;
let paginatedTasksCache = {};

// intial dom loaded
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const welcomeContainer = document.getElementById('welcome-container');
    const taskIframe = document.getElementById('taskiframe');
    
    welcomeContainer.classList.add('active');
    taskIframe.classList.remove('active');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        toggleBtn.setAttribute('aria-expanded', !sidebar.classList.contains('collapsed'));
    });

    toggleBtn.setAttribute('aria-expanded', !sidebar.classList.contains('collapsed'));

    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    sidebar.appendChild(paginationContainer);

    initialize();
});

// Returns the number of tasks to display per page
function getLimitForPage(page) {
    return defaultTasksPerPage;
}

// Fetches paginated task data from the server with caching
async function fetchPaginatedData(page = 1) {
    // Return cached data if available
    if (paginatedTasksCache[page]) {
        return paginatedTasksCache[page];
    }

    try {
        const limit = getLimitForPage(page);
        const response = await fetch(`http://localhost:3000/initialTasks?_page=${page}&_limit=${limit}`);
        const data = await response.json();
        totalTaskCount = parseInt(response.headers.get('X-Total-Count')) || 0;
        
        // Cache the fetched data
        paginatedTasksCache[page] = data;
        return data;
    } catch (error) {
        console.error("Error fetching paginated data:", error);
        return [];
    }
}

// Fetches all task data from the server with caching
async function fetchAllData() {
    // Return cached data if available
    if (allTasksCache) {
        return allTasksCache;
    }

    try {
        const response = await fetch('http://localhost:3000/initialTasks');
        const data = await response.json();
        totalTaskCount = data.length;
        
        // Cache the fetched data
        allTasksCache = data;
        return data;
    } catch (error) {
        console.error("Error fetching all data:", error);
        return [];
    }
}

// Clear cache when needed (e.g., when new tasks might have been added)
function clearCache() {
    allTasksCache = null;
    paginatedTasksCache = {};
}

// Renders the task list in the sidebar
function renderTaskList(tasks) {
    const ul = document.getElementById('tasklist');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');
    ul.innerHTML = "";

    if (tasks.length === 0) {
        ul.innerHTML = `
            <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
                <img src="img/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
                <span style="color: red; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
            </li>
        `;
        
        if (!taskIframe.src) {
            taskIframe.classList.remove('active');
            welcomeContainer.classList.add('active');
        }
        return;
    }

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;
        listItem.dataset.file = task.file;

        if (task.file === currentActiveTaskFile) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', () => {
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

// Sets the active task in the sidebar list
function setActiveTask(selectedItem) {
    const allItems = document.querySelectorAll('#tasklist li');
    allItems.forEach(item => item.classList.remove('active'));
    selectedItem.classList.add('active');
}

// Handles sorting of tasks in ascending/descending order
async function sortingSidebarLinks() {
    const button = document.getElementById('sorting');
    button.addEventListener('click', async () => {
        isAscending = !isAscending;
        
        if (currentFilteredTasks.length > 0) {
            const startIndex = (currentPage - 1) * defaultTasksPerPage;
            const endIndex = startIndex + defaultTasksPerPage;
            const currentPageTasks = currentFilteredTasks.slice(startIndex, endIndex);
            
            currentPageTasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            
            renderTaskList(currentPageTasks);
        } else {
            // Get from cache if available
            let tasks = paginatedTasksCache[currentPage] || await fetchPaginatedData(currentPage);
            tasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            renderTaskList(tasks);
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

// Handles search functionality for tasks
function SearchTasks() {
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('input', async () => {
        const inputSearchValue = searchInput.value.trim().toLowerCase();
        isAscending = true;

        if (inputSearchValue === "") {
            currentFilteredTasks = [];
            currentPage = 1;
            await showTaskLists();
            return;
        }

        // Use cached data if available
        const allTasks = allTasksCache || await fetchAllData();
        currentFilteredTasks = allTasks.filter(task => {
            const name = task.name.toLowerCase();
            const file = task.file.toLowerCase();
            const wordRegex = new RegExp(`\\b${inputSearchValue}\\b`, 'i');
            return wordRegex.test(name) || wordRegex.test(file);
        });

        currentPage = 1;
        const startIndex = (currentPage - 1) * defaultTasksPerPage;
        const endIndex = startIndex + defaultTasksPerPage;
        const tasksForPage = currentFilteredTasks.slice(startIndex, endIndex);
        
        renderTaskList(tasksForPage);
        updatePaginationButtons(Math.ceil(currentFilteredTasks.length / defaultTasksPerPage));
        updateURL();
    });
}

// Updates the URL with current page and task parameters
function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('page', currentPage);
    
    if (currentActiveTaskFile) {
        url.searchParams.set('task', currentActiveTaskFile);
    } else {
        url.searchParams.delete('task');
    }
    
    history.pushState({ page: currentPage, task: currentActiveTaskFile }, '', url);
}

// Handles browser back/forward navigation
window.addEventListener('popstate', async (event) => {
    if (event.state) {
        currentPage = event.state.page || 1;
        currentActiveTaskFile = event.state.task || null;
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        currentPage = parseInt(urlParams.get('page')) || 1;
        currentActiveTaskFile = urlParams.get('task') || null;
    }
    
    await showTaskLists();
});

// Updates pagination buttons based on current page and total pages
function updatePaginationButtons(totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return;

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            await showTaskLists();
            updateURL();
        }
    });
    paginationContainer.appendChild(prevButton);

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        if (currentPage < totalPages / 2) {
            endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        } else {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
    }

    if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.textContent = '1';
        firstPageButton.disabled = currentPage === 1;
        firstPageButton.addEventListener('click', async () => {
            currentPage = 1;
            await showTaskLists();
            updateURL();
        });
        paginationContainer.appendChild(firstPageButton);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.disabled = i === currentPage;
        pageButton.addEventListener('click', async () => {
            currentPage = i;
            await showTaskLists();
            updateURL();
        });
        paginationContainer.appendChild(pageButton);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
        
        const lastPageButton = document.createElement('button');
        lastPageButton.textContent = totalPages;
        lastPageButton.disabled = currentPage === totalPages;
        lastPageButton.addEventListener('click', async () => {
            currentPage = totalPages;
            await showTaskLists();
            updateURL();
        });
        paginationContainer.appendChild(lastPageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', async () => {
        if (currentPage < totalPages) {
            currentPage++;
            await showTaskLists();
            updateURL();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Displays tasks based on current filters/pagination
async function showTaskLists() {
    const welcomeContainer = document.getElementById('welcome-container');
    const taskIframe = document.getElementById('taskiframe');

    if (currentFilteredTasks.length > 0) {
        const startIndex = (currentPage - 1) * defaultTasksPerPage;
        const endIndex = startIndex + defaultTasksPerPage;
        const tasksForPage = currentFilteredTasks.slice(startIndex, endIndex);
        
        renderTaskList(tasksForPage);
        updatePaginationButtons(Math.ceil(currentFilteredTasks.length / defaultTasksPerPage));
    } else {
        // Use cached data if available
        const tasks = paginatedTasksCache[currentPage] || await fetchPaginatedData(currentPage);
        renderTaskList(tasks);
        updatePaginationButtons(Math.ceil(totalTaskCount / defaultTasksPerPage));
    }

    if (currentActiveTaskFile) {
        taskIframe.src = currentActiveTaskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    } else {
        taskIframe.classList.remove('active');
        welcomeContainer.classList.add('active');
    }
}

// Loads task from URL query parameters
async function loadTaskFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    const page = urlParams.get('page');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');
    
    if (page) currentPage = parseInt(page) || 1;
    if (taskFile) {
        currentActiveTaskFile = taskFile;
        taskIframe.src = taskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    }

    await showTaskLists();

    if (taskFile) {
        setTimeout(() => {
            const listItems = document.querySelectorAll('#tasklist li');
            listItems.forEach(li => {
                if (li.dataset.file === taskFile) {
                    setActiveTask(li);
                }
            });
        }, 100);
    }
}

// Initializes the application by loading tasks and setting up event listeners
async function initialize() {
    await loadTaskFromQuery();
    sortingSidebarLinks();
    SearchTasks();
}