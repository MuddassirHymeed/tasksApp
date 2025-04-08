const initialTasks = [
    { name: "Check number range", file: "tasks/checkNumberRange.html" },
    { name: "Add characters", file: "tasks/addCharacters.html" },
    { name: "Difference by 13", file: "tasks/differenceBy13.html" },
    { name: "Check Java with string", file: "tasks/checkJavaWithString.html" },
    { name: "Compare with 50", file: "tasks/compareWith50.html" },
    { name: "Days left", file: "tasks/daysLeft.html" },
    { name: "Difference by 19", file: "tasks/differenceBy19.html" },
    { name: "Display Date", file: "tasks/displayDate.html" },
    { name: "Check by 14", file: "tasks/checkBy14.html" },
    { name: "Uppercase and lowercase", file: "tasks/uppercase&lowercase.html" },
    { name: "Remove character", file: "tasks/removeCharacter.html" },
    { name: "Change Temperature", file: "tasks/changeTemperature.html" },
    { name: "Area of traingle", file: "tasks/areaofTraingle.html" },
    { name: "Display Time", file: "tasks/displayTime.html" },
    { name: "Each Word Capitilize", file: "tasks/eachWordCapitalize.html" },
    { name: "Date format", file: "tasks/dateFormat.html" },
    { name: "Get Url", file: "tasks/getURL.html" },
    { name: "multiplication and dividion of 2 numbers", file: "tasks/mul-divofTwoNumbers.html" },
    { name: "Multiplication of 3 or 7", file: "tasks/mulof3-or-7.html" },
    { name: "Spin and Win", file: "tasks/spin&Win.html" },
    { name: "Add py", file: "tasks/addPy.html" },
    { name: "Matched numbers", file: "tasks/matchedNumbers.html" },
    { name: "Sum of Two numbers", file: "tasks/sumofTwoNumbers.html" },
    { name: "Left year", file: "tasks/leafYear.html" },
    { name: "Display Grade Student", file: "tasks/displayGradeStudent.html" },
]


function showTaskLists() {
    const ul = document.getElementById('tasklist')
    const showTasks = document.getElementById('taskiframe')
    ul.innerHTML = ""

    initialTasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name

        listItem.addEventListener('click', () => {
            showTasks.src = task.file
        })

        ul.appendChild(listItem)
    })
}
showTaskLists()


function sortingSidebarLinks() {
    const button = document.getElementById('sorting')
    button.addEventListener('click', () => {
        initialTasks.sort((a, b) => a.name.localeCompare(b.name))
        showTaskLists()
    })
}
sortingSidebarLinks()


function SearchTasks() {
    const searchInput = document.getElementById('search-bar');
    const ul = document.getElementById('tasklist');
    const showTasks = document.getElementById('taskiframe');

    searchInput.addEventListener('input', () => {
        const inputSearchValue = searchInput.value.toLowerCase();

        const filteredTasks = initialTasks.filter(task =>
            task.name.toLowerCase().includes(inputSearchValue) ||
            task.file.toLowerCase().includes(inputSearchValue)
        );

        ul.innerHTML = "";

        filteredTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task.name;

            listItem.addEventListener('click', () => {
                showTasks.src = task.file;
            });

            ul.appendChild(listItem);
        });
    });

}

SearchTasks()


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

setTimeout(() => {
    handleTaskClicksWithQuery();
    loadTaskFromQuery();
}, 100);




