import { places } from '../data/pics.mjs';

const container = document.getElementById('allplaces');

places.forEach(place => {
    const card = document.createElement('div');

    card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${(place.img)}" alt="${place.name}" loading="lazy">
    <p>${place.description}</p>
    <address>${place.address}</address>
  `;

    container.appendChild(card);
});

const messageEl = document.getElementById('visit-message');
const LAST_VISIT_KEY = 'lastVisit';
const now = Date.now();

const lastVisit = localStorage.getItem(LAST_VISIT_KEY);

if (!lastVisit) {
    // First visit
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsBetweenVisits = now - parseInt(lastVisit, 10);
    const daysBetween = Math.floor(millisecondsBetweenVisits / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
        messageEl.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        messageEl.textContent = "You last visited 1 day ago.";
    } else {
        messageEl.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// Save current visit time
localStorage.setItem(LAST_VISIT_KEY, now);