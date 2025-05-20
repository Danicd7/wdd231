
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;


const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;

// Menu toggle for mobile view
const hamburgerBtn = document.querySelector('.hamburger');
const primaryNav = document.querySelector('.nav');

if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', function () {
        primaryNav.classList.toggle('open');
        // Toggle between hamburger and close icon
        const isOpen = primaryNav.classList.contains('open');
        hamburgerBtn.textContent = isOpen ? '✕' : '☰';
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking on a link
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                primaryNav.classList.remove('show');
                hamburgerBtn.textContent = '☰';
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
