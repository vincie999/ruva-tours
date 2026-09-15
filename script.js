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

// =========================
// COPY EMAIL FUNCTIONALITY
// =========================
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const email = button.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            alert("Copied " + email + " to clipboard!");
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
