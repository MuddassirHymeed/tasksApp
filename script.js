let currentFilteredTasks = [];
let isAscending = true;
let currentActiveTaskFile = null;

let currentpage = 1;
const tasksperPage = 10;
let isloading = false;
let ismoreTasks = true;

let allTasks = [];

// set sidebar toggle function
// show welcome screen by default
// set scroll event for infinte loading
// calls to start app 
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

    const tasklistContainer = document.getElementById('tasklist-container');
    tasklistContainer.addEventListener('scroll', handleScroll);

    initialize();
});

// create loader
function createLoader() {
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

// handle scroll event
function handleScroll() {
    if (!ismoreTasks || isloading) {
        return;
    }
    const taskslistContainer = document.getElementById('tasklist-container');
    const { scrollTop, scrollHeight, clientHeight } = taskslistContainer;
    const pixel = 50;

    // 0 + 500 >= 1000 - 50 → 500 >= 950 → False
    // 460 + 500 >= 1000 - 50 → 960 >= 950 → True

    if (scrollTop + clientHeight >= scrollHeight - pixel) {
        loadMoretasks();
    }
}

// loads more tasks when scrolling
async function loadMoretasks() {
    if (isloading || !ismoreTasks) return;

    isloading = true;
    console.log("isloading:", isloading, "ismoreTasks:", ismoreTasks);
    const ul = document.getElementById('tasklist');

    const existingEndMessage = ul.querySelector('.end-tasks');
    if (existingEndMessage) {

        existingEndMessage.remove();
    }

    const loader = createLoader();
    loader.id = 'bottom-loader';
    ul.appendChild(loader);

    const minLoadTime = new Promise(resolve => setTimeout(resolve, 900));

    try {
        let tasksToAdd = []; 


        if (currentFilteredTasks.length > 0) {
            // comes from currentfilteredtasks
            const totalLoaded = currentpage * tasksperPage;
            // 1 * 10 = 10
            tasksToAdd = currentFilteredTasks.slice(totalLoaded, totalLoaded + tasksperPage);
            // 10, 10 + 10 = 20 (10,20)
            ismoreTasks = totalLoaded + tasksperPage < currentFilteredTasks.length;
            // (10 + 10) < 25 

        } else {

            // comes from server API
            tasksToAdd = await fetchAllData(currentpage + 1, tasksperPage);
            ismoreTasks = tasksToAdd.length === tasksperPage;
            // 10 === 10 
            // 10 === 10
            // 5 === 10 no more tasks
        }

        await minLoadTime;

        if (tasksToAdd.length > 0) {
            currentpage++;
            console.log("currentpage:", currentpage);
            loader.remove();
            renderTaskList(tasksToAdd, false);

            if (!currentFilteredTasks.length) {
                allTasks = [...allTasks, ...tasksToAdd];
            }
            // Initial: allTasks = [Task 1, Task 2]
            // New: tasksToAdd = [Task 3, Task 4]
            // Result: allTasks = [Task 1, Task 2, Task 3, Task 4]
        }
    } catch (error) {
        console.error('Error loading more tasks:', error);
    } finally {
        const loaderToRemove = document.getElementById('bottom-loader');
        if (loaderToRemove){
            loaderToRemove.remove();
        } 
        isloading = false;

        if (!ismoreTasks && currentpage > 1) {
            const message = document.createElement('li');
            message.className = 'end-tasks';
            message.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; cursor: default">
                    <span style="color: #F46275; font-size: 19px; padding:4px; font-weight: 400;">No more tasks to load</span>
                </div>
            `;
            ul.appendChild(message);
        }
    }
}

// fetches tasks from server
async function fetchAllData(page = 1, limit = tasksperPage) {
    try {
        const response = await fetch(`http://localhost:3000/initialTasks?_page=${page}&_limit=${limit}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching all data:", error);
        return [];
    }
}

// renders task list in sidebar
function renderTaskList(tasks, reset = true) {
    const ul = document.getElementById('tasklist');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');

    if (reset) {
        ul.innerHTML = "";
        const existmessage = ul.querySelector('.end-tasks');
        if (existmessage){
            existmessage.remove();
        } 
    }

    if (tasks.length === 0 && currentpage === 1) {
        ul.innerHTML = `
            <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
                <img src="img/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
                <span style="color: #F46275; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
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
        listItem.file = task.file;

        if (task.file === currentActiveTaskFile) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', () => {
            currentActiveTaskFile = task.file;
            console.log("currentActiveTaskFile:", currentActiveTaskFile);
            taskIframe.src = task.file;
            taskIframe.classList.add('active');
            welcomeContainer.classList.remove('active');
            updateURL();
            setActiveTask(listItem);
        });

        ul.appendChild(listItem);
    });
}

// set active task in sidebar
function setActiveTask(selectedItem) {
    const allItems = document.querySelectorAll('#tasklist li');
    allItems.forEach(item => item.classList.remove('active'));
    selectedItem.classList.add('active');
}

// handle task sorting
async function sortingSidebarLinks() {
    const button = document.getElementById('sorting');
    button.addEventListener('click', async () => {
        isAscending = !isAscending;
        console.log("isAscending:", isAscending);
        currentpage = 1;

        if (currentFilteredTasks.length > 0) {
            currentFilteredTasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            renderTaskList(currentFilteredTasks);
        } else {
            let tasks = await fetchAllData();
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

// handle task search
function SearchTasks() {
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('input', async () => {
        const inputSearchValue = searchInput.value.trim().toLowerCase();
        isAscending = true;
        currentpage = 1;
        ismoreTasks = true;

        if (inputSearchValue === "") {
            currentFilteredTasks = [];
            await showTaskLists();
            return;
        }

        currentFilteredTasks = allTasks.filter(task => {
            const name = task.name.toLowerCase();
            const file = task.file.toLowerCase();
            const wordRegex = new RegExp(`\\b${inputSearchValue}\\b`, 'i');
            return wordRegex.test(name) || wordRegex.test(file);
        });
        console.log("currentFilteredTasks:", currentFilteredTasks);

        ismoreTasks = currentFilteredTasks.length > tasksperPage;
        renderTaskList(currentFilteredTasks.slice(0, tasksperPage));
        updateURL();
    });
}

// updates URL with current state
function updateURL() {
    const url = new URL(window.location);
    if (currentActiveTaskFile) {
        url.searchParams.set('task', currentActiveTaskFile);
    } else {
        url.searchParams.delete('task');
    }
    history.pushState({ task: currentActiveTaskFile }, '', url);
}

// shows tasks based on current filters
async function showTaskLists() {
    const welcomeContainer = document.getElementById('welcome-container');
    const taskIframe = document.getElementById('taskiframe');

    currentpage = 1;
    ismoreTasks = true;

    if (currentFilteredTasks.length > 0) {
        // User searched for "urgent"
        renderTaskList(currentFilteredTasks.slice(0, tasksperPage), true);
    } else {
        //No Filters (Normal View)
        const tasks = await fetchAllData(currentpage, tasksperPage);
        allTasks = tasks;
        renderTaskList(tasks, true);
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

// loads task from URL query parameter
async function loadTaskFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');

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
                if (li.file === taskFile) {
                    setActiveTask(li);
                }
            });
        }, 100);
    }
}

// init the app
async function initialize() {
    await loadTaskFromQuery();
    sortingSidebarLinks();
    SearchTasks();
}