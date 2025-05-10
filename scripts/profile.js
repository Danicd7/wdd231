// Hamburger toggle (optional if using hamburger)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('nav ul');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Set current year dynamically
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    // Load and display courses
    displayCourses(courses);
});

