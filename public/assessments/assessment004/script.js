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
});
