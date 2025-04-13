/**
 * MAIN APPLICATION CODE FOR TASK MANAGEMENT SYSTEM
 * Features:
 * - Paginated task listing
 * - Task search functionality
 * - Sorting (ascending/descending)
 * - Responsive sidebar
 * - URL state management
 * - iFrame task preview
 */

// =============================================
// INITIALIZATION & GLOBAL VARIABLES
// =============================================

// Global state variables
let currentFilteredTasks = [];       // Stores tasks filtered by search
let isAscending = true;              // Sort direction flag
let currentPage = 1;                 // Current pagination page
let currentActiveTaskFile = null;    // Currently selected task file
const defaultTasksPerPage = 10;      // Number of tasks per page
let totalTaskCount = 0;              // Total tasks available from API

// =============================================
// DOM INITIALIZATION
// =============================================

/**
 * Initializes the application when DOM is loaded
 * Sets up sidebar, welcome screen, and event listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const welcomeContainer = document.getElementById('welcome-container');
    const taskIframe = document.getElementById('taskiframe');
    
    // Set initial UI states
    welcomeContainer.classList.add('active');
    taskIframe.classList.remove('active');

    // Sidebar toggle functionality
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        toggleBtn.setAttribute('aria-expanded', !sidebar.classList.contains('collapsed'));
    });

    // Set initial ARIA attribute
    toggleBtn.setAttribute('aria-expanded', !sidebar.classList.contains('collapsed'));

    // Create and append pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    sidebar.appendChild(paginationContainer);

    // Initialize application
    initialize();
});

// =============================================
// DATA FETCHING FUNCTIONS
// =============================================

/**
 * Returns the number of tasks to fetch for a given page
 * @param {number} page - Current page number
 * @returns {number} - Number of tasks to fetch
 */
function getLimitForPage(page) {
    return defaultTasksPerPage;
}

/**
 * Fetches paginated task data from API
 * @param {number} page - Page number to fetch
 * @returns {Promise<Array>} - Array of task objects
 */
async function fetchPaginatedData(page = 1) {
    try {
        const limit = getLimitForPage(page);
        const response = await fetch(`http://localhost:3000/initialTasks?_page=${page}&_limit=${limit}`);
        const data = await response.json();
        totalTaskCount = parseInt(response.headers.get('X-Total-Count')) || 0;
        return data;
    } catch (error) {
        console.error("Error fetching paginated data:", error);
        return [];
    }
}

/**
 * Fetches all tasks from API (used for search functionality)
 * @returns {Promise<Array>} - Array of all task objects
 */
async function fetchAllData() {
    try {
        const response = await fetch('http://localhost:3000/initialTasks');
        const data = await response.json();
        totalTaskCount = data.length;
        return data;
    } catch (error) {
        console.error("Error fetching all data:", error);
        return [];
    }
}

// =============================================
// TASK RENDERING & SELECTION
// =============================================

/**
 * Renders the task list in the sidebar
 * @param {Array} tasks - Array of task objects to render
 */
function renderTaskList(tasks) {
    const ul = document.getElementById('tasklist');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');
    ul.innerHTML = "";

    // Show "no tasks" message if empty
    if (tasks.length === 0) {
        ul.innerHTML = `
            <li style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; cursor: default">
                <img src="img/not-tasks-found.png" alt="No tasks found" style="width: 40px; height: 40px; margin-bottom: 10px">
                <span style="color: red; font-size: 18px; font-weight: 500; letter-spacing: 1px">No tasks found</span>
            </li>
        `;
        
        // Reset UI if no task is selected
        if (!taskIframe.src) {
            taskIframe.classList.remove('active');
            welcomeContainer.classList.add('active');
        }
        return;
    }

    // Create list items for each task
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;
        listItem.dataset.file = task.file;

        // Highlight active task
        if (task.file === currentActiveTaskFile) {
            listItem.classList.add('active');
        }

        // Task click handler
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

/**
 * Sets the active task in the task list
 * @param {HTMLElement} selectedItem - The clicked list item element
 */
function setActiveTask(selectedItem) {
    const allItems = document.querySelectorAll('#tasklist li');
    allItems.forEach(item => item.classList.remove('active'));
    selectedItem.classList.add('active');
}

// =============================================
// SORTING FUNCTIONALITY
// =============================================

/**
 * Initializes and handles task sorting functionality
 */
async function sortingSidebarLinks() {
    const button = document.getElementById('sorting');
    button.addEventListener('click', async () => {
        isAscending = !isAscending;
        
        // Sort either filtered tasks or paginated data
        if (currentFilteredTasks.length > 0) {
            const startIndex = (currentPage - 1) * defaultTasksPerPage;
            const endIndex = startIndex + defaultTasksPerPage;
            const currentPageTasks = currentFilteredTasks.slice(startIndex, endIndex);
            
            currentPageTasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            
            renderTaskList(currentPageTasks);
        } else {
            const tasks = await fetchPaginatedData(currentPage);
            tasks.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            renderTaskList(tasks);
        }

        // Update button UI
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

// =============================================
// SEARCH FUNCTIONALITY
// =============================================

/**
 * Initializes and handles task search functionality
 */
function SearchTasks() {
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('input', async () => {
        const inputSearchValue = searchInput.value.trim().toLowerCase();
        isAscending = true;

        // Reset if search is empty
        if (inputSearchValue === "") {
            currentFilteredTasks = [];
            currentPage = 1;
            await showTaskLists();
            return;
        }

        // Filter tasks based on search term
        currentFilteredTasks = (await fetchAllData()).filter(task => {
            const name = task.name.toLowerCase();
            const file = task.file.toLowerCase();
            const wordRegex = new RegExp(`\\b${inputSearchValue}\\b`, 'i');
            return wordRegex.test(name) || wordRegex.test(file);
        });

        // Show first page of results
        currentPage = 1;
        const startIndex = (currentPage - 1) * defaultTasksPerPage;
        const endIndex = startIndex + defaultTasksPerPage;
        const tasksForPage = currentFilteredTasks.slice(startIndex, endIndex);
        
        renderTaskList(tasksForPage);
        updatePaginationButtons(Math.ceil(currentFilteredTasks.length / defaultTasksPerPage));
        updateURL();
    });
}

// =============================================
// URL & HISTORY MANAGEMENT
// =============================================

/**
 * Updates the URL with current state (page and active task)
 */
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

/**
 * Handles browser back/forward navigation
 */
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

// =============================================
// PAGINATION CONTROLS
// =============================================

/**
 * Creates and updates pagination buttons
 * @param {number} totalPages - Total number of pages available
 */
function updatePaginationButtons(totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    // Don't show pagination if only one page
    if (totalPages <= 1) return;

    // Previous Button
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

    // Dynamic Page Buttons (with ellipsis for many pages)
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust page range if we don't have enough visible pages
    if (endPage - startPage + 1 < maxVisiblePages) {
        if (currentPage < totalPages / 2) {
            endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        } else {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
    }

    // First Page Button (with ellipsis if needed)
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

    // Numbered Page Buttons
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

    // Last Page Button (with ellipsis if needed)
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

    // Next Button
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

// =============================================
// MAIN TASK DISPLAY LOGIC
// =============================================

/**
 * Main function to display tasks based on current state
 * Handles both filtered and paginated task display
 */
async function showTaskLists() {
    const welcomeContainer = document.getElementById('welcome-container');
    const taskIframe = document.getElementById('taskiframe');

    // Show filtered tasks if search is active
    if (currentFilteredTasks.length > 0) {
        const startIndex = (currentPage - 1) * defaultTasksPerPage;
        const endIndex = startIndex + defaultTasksPerPage;
        const tasksForPage = currentFilteredTasks.slice(startIndex, endIndex);
        
        renderTaskList(tasksForPage);
        updatePaginationButtons(Math.ceil(currentFilteredTasks.length / defaultTasksPerPage));
    } else {
        // Show regular paginated tasks
        const tasks = await fetchPaginatedData(currentPage);
        renderTaskList(tasks);
        updatePaginationButtons(Math.ceil(totalTaskCount / defaultTasksPerPage));
    }

    // Handle welcome container visibility
    if (currentActiveTaskFile) {
        taskIframe.src = currentActiveTaskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    } else {
        taskIframe.classList.remove('active');
        welcomeContainer.classList.add('active');
    }
}

// =============================================
// INITIALIZATION FUNCTIONS
// =============================================

/**
 * Loads task from URL query parameters
 * Handles deep linking to specific tasks/pages
 */
async function loadTaskFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskFile = urlParams.get('task');
    const page = urlParams.get('page');
    const taskIframe = document.getElementById('taskiframe');
    const welcomeContainer = document.getElementById('welcome-container');
    
    // Set initial state from URL
    if (page) currentPage = parseInt(page) || 1;
    if (taskFile) {
        currentActiveTaskFile = taskFile;
        taskIframe.src = taskFile;
        taskIframe.classList.add('active');
        welcomeContainer.classList.remove('active');
    }

    await showTaskLists();

    // Highlight active task in list after a small delay
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

/**
 * Main initialization function
 * Sets up all application functionality
 */
async function initialize() {
    await loadTaskFromQuery();
    sortingSidebarLinks();
    SearchTasks();
}