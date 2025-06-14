const hamburgerBtn = document.querySelector('#menu');
const primaryNav = document.querySelector('.menulink');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
})

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const testimonials = [
    {
        quote: "Board Game Hub helped me discover amazing games for family night!",
        author: "— Sarah L."
    },
    {
        quote: "This site is a goldmine for any board game enthusiast.",
        author: "— Mark D."
    },
    {
        quote: "Love the clean layout and the reviews are super helpful!",
        author: "— Amina R."
    },
    {
        quote: "Finally found the perfect strategy game for my group.",
        author: "— Luis C."
    }
];

let currentIndex = 0;
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

function showTestimonial(index) {
    quoteEl.textContent = `"${testimonials[index].quote}"`;
    authorEl.textContent = testimonials[index].author;
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

// Initialize on load
showTestimonial(currentIndex);

const openButtons = document.querySelectorAll('.open-button');
const closeButtons = document.querySelectorAll('.close-button');

openButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const dialog = btn.nextElementSibling;
        dialog.showModal();
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const dialog = btn.closest('dialog');
        dialog.close();
    });
});
