
// Directory fetch and display
const url = 'data/places.json';
const container = document.getElementById('places');

async function getPlaces() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPlaces(data.places);
    } catch (err) {
        container.innerHTML = `<p>Error loading directory.</p>`;
        console.error('Error fetching members:', err);
    }
}

function displayPlaces(places) {
    container.innerHTML = '';
    places.forEach((place) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <h4>${place.name}</h4>
          <img src="images/${place.img}" alt="${place.name} logo">
          <p><strong>🌐:</strong> <a href="${place.website}" target="_blank">${place.website}</a></p>
          <p><strong>📍:</strong> ${place.location}</p>
        `;

        container.appendChild(card);
    });
}

// View toggle buttons
document.getElementById('grid').addEventListener('click', () => {
    container.classList.remove('list');
});

document.getElementById('list').addEventListener('click', () => {
    container.classList.add('list');
});

getPlaces();
