const hamburgerBtn = document.querySelector('#menu');
const primaryNav = document.querySelector('.menulink');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
})

const currentTemp = document.querySelector('#weather_img');
const weatherIcon = document.querySelector('#report');
const captionDesc = document.querySelector('forecast');

const myKey = "bd2a2c4a50db6f6eef4df6113f07c665"
const myLat = "40.40867050423699"
const myLong = "-3.6491779550813224"

const myURL = `https://api.openweathermap.org/data/2.5//forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconSource = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    const desc = data.list[0].weather[0].description;

    // Make sure these elements exist
    const weatherIcon = document.querySelector('#weather-icon');
    const weatherDesc = document.querySelector('#weather-description');
    const report = document.querySelector('.weather-info'); // Add this class in your HTML if not present
    const forecast = document.querySelector('.forecast');   // Add this class in your HTML if not present

    // Display current weather
    if (weatherIcon && weatherDesc) {
        weatherIcon.setAttribute('src', iconSource);
        weatherIcon.setAttribute('alt', desc);
        weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    }

    // Display extra weather details
    if (report) {
        report.innerHTML += `
            <p>${data.list[0].main.temp.toFixed(1)}&deg;C</p>
            <p>${desc}</p>
            <p>High: ${data.list[0].main.temp_max.toFixed(1)}&deg;C</p>
            <p>Low: ${data.list[0].main.temp_min.toFixed(1)}&deg;C</p>
            <p>Humidity: ${data.list[0].main.humidity}%</p>
        `;
    }

    // Forecast block
    if (forecast) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date();

        forecast.innerHTML = `
            <div>
                <p>Today: ${data.list[0].main.temp.toFixed(1)}&deg;C</p>
                 
            </div>
            <div>
                <p>${dayNames[(date.getDay() + 1) % 7]}: ${data.list[8].main.temp.toFixed(1)}&deg;C</p>
                <img src="https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png">
                
            </div>
            <div>
                <p>${dayNames[(date.getDay() + 2) % 7]}: ${data.list[16].main.temp.toFixed(1)}&deg;C</p>
                <img src="https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png" ">
                
            </div>
        `;






    }
}

const spotlightURL = "data/members.json"; // Adjust path if needed

async function loadSpotlights() {
    try {
        const response = await fetch(spotlightURL);
        const data = await response.json();
        const members = data.directory;

        // Filter only Gold and Silver members
        const spotlightMembers = members.filter(member =>
            member.membership.toLowerCase() === "gold" ||
            member.membership.toLowerCase() === "silver"
        );

        // Shuffle and pick 2 or 3 members
        const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const selected = shuffleArray(spotlightMembers).slice(0, count);

        displaySpotlights(selected);
    } catch (error) {
        console.error("Error loading spotlight data:", error);
    }
}

function displaySpotlights(members) {
    const container = document.getElementById("spotlight-cards");
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
      <h4>${member.name}</h4>
      <img src="images/${member.image}" alt="${member.name} logo">
      <p><strong>Membership:</strong> ${member.membership}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><a href="${member.url}" target="_blank">Visit Website</a></p>
    `;

        container.appendChild(card);
    });
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Run on page load
loadSpotlights();