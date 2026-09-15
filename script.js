// Mobile Navigation Toggle
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
