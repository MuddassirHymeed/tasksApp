let initialTasks = []; 

// fetch data
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/initialTasks');
        initialTasks = await response.json(); 
        showTaskLists();              
        handleTaskClicksWithQuery();  
        loadTaskFromQuery();         
    } catch (error) {
        console.log("Error Fetching data:", error);
    }
}
fetchData();


// show all tasks
function showTaskLists() {
    const ul = document.getElementById('tasklist');
    const showTasks = document.getElementById('taskiframe');
    ul.innerHTML = "";

    initialTasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;

        listItem.addEventListener('click', () => {
            showTasks.src = task.file;
            updateURLAndLoad(task.file);
        });

        ul.appendChild(listItem);
    });
}


// sort all tasks
function sortingSidebarLinks() {
    const button = document.getElementById('sorting');
    button.addEventListener('click', () => {
        initialTasks.sort((a, b) => a.name.localeCompare(b.name));
        showTaskLists();
    });
}
sortingSidebarLinks();


// search tasks
function SearchTasks() {
    const searchInput = document.getElementById('search-bar');
    const ul = document.getElementById('tasklist');
    const showTasks = document.getElementById('taskiframe');

    searchInput.addEventListener('input', () => {
        const inputSearchValue = searchInput.value.trim().toLowerCase();

        
        const filteredTasks = inputSearchValue === ""
            ? initialTasks
            : initialTasks.filter(task => {
                const name = task.name.toLowerCase();
                const file = task.file.toLowerCase();

                
                const wordRegex = new RegExp(`\\b${inputSearchValue}\\b`, 'i');

                return wordRegex.test(name) || wordRegex.test(file);
            });

        ul.innerHTML = "";

        filteredTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task.name;

            listItem.addEventListener('click', () => {
                showTasks.src = task.file;
                updateURLAndLoad(task.file);
            });

            ul.appendChild(listItem);
        });
    });
}
SearchTasks()

// search Parameter used for each task
function updateURLAndLoad(taskFile) {
    const url = new URL(window.location);
    url.searchParams.set('task', taskFile);
    history.pushState({ task: taskFile }, '', url);
    document.getElementById('taskiframe').src = taskFile;
}

function handleTaskClicksWithQuery() {
    const ul = document.getElementById('tasklist');
    ul.querySelectorAll('li').forEach(listItem => {
        const task = initialTasks.find(t => t.name === listItem.textContent);
        if (!task) return;

        listItem.addEventListener('click', (e) => {
            e.preventDefault();
            updateURLAndLoad(task.file);
        });
    });
}

function loadTaskFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    if (taskFile) {
        document.getElementById('taskiframe').src = taskFile;
    }
}

