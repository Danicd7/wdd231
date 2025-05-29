

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu

    // Footer info
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Directory fetch and display
    const url = 'data/members.json'; // <-- your actual path
    const container = document.getElementById('directory');

    async function getMembers() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayMembers(data.directory);
        } catch (err) {
            container.innerHTML = `<p>Error loading directory.</p>`;
            console.error('Error fetching members:', err);
        }
    }

    function displayMembers(members) {
        container.innerHTML = '';
        members.forEach((member) => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
          <h4>${member.name}</h4>
          <p><em>${member.membership}</em></p>
          <img src="images/${member.image}" alt="${member.name} logo">
          <p><strong>📧:</strong> ${member.phone}</p>
          <p><strong>🌐:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
          <p><strong>📍:</strong> ${member.address}</p>
          <p><strong>⏳:</strong> Member for ${member.join}</p>
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

    getMembers();
});