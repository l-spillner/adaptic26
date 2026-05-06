document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon (optional minor enhancement)
            if (navLinks.classList.contains('active')) {
                navToggle.innerHTML = '&#10005;'; // X icon
            } else {
                navToggle.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
    }

    // Set active nav link based on current page
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') {
        currentPath = 'index.html';
    }
    
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath === currentPath) {
            item.classList.add('active');
        }
    });
});
