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

// Course array
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
    { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: true },
    { code: "WDD 230", name: "Web Frontend Development I", credits: 3, completed: false },
    { code: "WDD 330", name: "Web Frontend Development II", credits: 3, completed: false },
];

// Filter buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-filter]')) {
        const filter = e.target.getAttribute('data-filter');
        let filtered = [];

        if (filter === 'all') {
            filtered = courses;
        } else if (filter === 'wdd') {
            filtered = courses.filter(course => course.code.startsWith('WDD'));
        } else if (filter === 'cse') {
            filtered = courses.filter(course => course.code.startsWith('CSE'));
        }

        displayCourses(filtered);
    }
});

// Display course cards
function displayCourses(courseArray) {
    const container = document.querySelector('#course-list');
    const creditCount = document.querySelector('#credit-total');
    container.innerHTML = '';

    courseArray.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
        card.innerHTML = `<h3>${course.code}: ${course.name}</h3><p>Credits: ${course.credits}</p>`;
        container.appendChild(card);
    });

    // Update total credits
    const total = courseArray.reduce((sum, course) => sum + course.credits, 0);
    if (creditCount) {
        creditCount.textContent = `Total Credits: ${total}`;
    }
}