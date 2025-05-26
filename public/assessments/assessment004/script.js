document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Dark Mode Functionality
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    // Add click event to the dark mode toggle button
    darkModeToggle.addEventListener('click', function () {
        // Check if dark mode is currently enabled
        if (body.classList.contains('dark-theme')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-theme');
        localStorage.setItem('darkMode', 'enabled');
        // Change the moon icon to sun when in dark mode
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-theme');
        localStorage.setItem('darkMode', 'disabled');
        // Change back to moon icon when in light mode
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Sidebar Menu Functionality
    // Open sidebar when menu button is clicked
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Close sidebar when close button is clicked
    sidebarClose.addEventListener('click', function () {
        closeSidebar();
    });

    // Close sidebar when clicking outside (on overlay)
    overlay.addEventListener('click', function () {
        closeSidebar();
    });

    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // TODO LIST FUNCTIONALITY
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let nextId = parseInt(localStorage.getItem('nextId')) || 1;

    // DOM Elements
    const addButton = document.getElementById('addbutton');
    const inputField = document.getElementById('input');
    const todoContainer = document.getElementById('listodo');
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');
    const pendingTasksSpan = document.getElementById('pending-tasks');
    const clearCompletedButton = document.getElementById('clear-completed');
    const clearAllButton = document.getElementById('clear-all');

    // Initialize the app
    renderTodos();
    updateStats();

    // Event Listeners
    addButton.addEventListener('click', addTodo);
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    clearCompletedButton.addEventListener('click', clearCompleted);
    clearAllButton.addEventListener('click', clearAll);

    // Add new todo
    function addTodo() {
        const todoText = inputField.value.trim();

        if (todoText === '') {
            alert('Please enter a task!');
            return;
        }

        const newTodo = {
            id: nextId++,
            text: todoText,
            completed: false,
            dateCreated: new Date().toLocaleString()
        };

        todos.push(newTodo);
        inputField.value = '';

        saveTodos();
        renderTodos();
        updateStats();
    }

    // Toggle todo completion
    function toggleTodo(id) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
            updateStats();
        }
    }

    // Delete todo
    function deleteTodo(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            todos = todos.filter(t => t.id !== id);
            saveTodos();
            renderTodos();
            updateStats();
        }
    }

    // Clear completed todos
    function clearCompleted() {
        const completedCount = todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            alert('No completed tasks to clear!');
            return;
        }

        if (
            confirm(
                `Are you sure you want to delete ${completedCount} completed task(s)?`
            )
        ) {
            todos = todos.filter(t => !t.completed);
            saveTodos();
            renderTodos();
            updateStats();
        }
    }

    // Clear all todos
    function clearAll() {
        if (todos.length === 0) {
            alert('No tasks to clear!');
            return;
        }

        if (
            confirm(
                'Are you sure you want to delete ALL tasks? This action cannot be undone.'
            )
        ) {
            todos = [];
            nextId = 1;
            saveTodos();
            renderTodos();
            updateStats();
        }
    }

    // Render todos to the DOM
    function renderTodos() {
        if (todos.length === 0) {
            todoContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-tasks"></i>
                    <h3>No tasks yet</h3>
                    <p>Add your first task above to get started!</p>
                </div>
            `;
            return;
        }

        const todosHTML = todos
            .map(
                todo => `
            <div class="todobox ${
                todo.completed ? 'completed' : ''
            }" id="todo-${todo.id}">
                <div class="todo-content">
                    <input 
                        type="checkbox" 
                        class="todo-checkbox" 
                        ${todo.completed ? 'checked' : ''} 
                        onchange="toggleTodo(${todo.id})"
                    />
                    <h3 class="todo-text">${escapeHtml(todo.text)}</h3>
                </div>
                <div class="todo-actions-buttons">
                    <button class="delete-button" onclick="deleteTodo(${
                        todo.id
                    })">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `
            )
            .join('');

        todoContainer.innerHTML = todosHTML;
    }

    // Update statistics
    function updateStats() {
        const total = todos.length;
        const completed = todos.filter(t => t.completed).length;
        const pending = total - completed;

        totalTasksSpan.textContent = `Total: ${total}`;
        completedTasksSpan.textContent = `Completed: ${completed}`;
        pendingTasksSpan.textContent = `Pending: ${pending}`;
    }

    // Save todos to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('nextId', nextId.toString());
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Make functions globally accessible
    window.toggleTodo = toggleTodo;
    window.deleteTodo = deleteTodo;
});
