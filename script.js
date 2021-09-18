// magic cards

document.querySelectorAll(".story-btn").forEach((boop) => {
  boop.addEventListener("click", () => {
    boop.classList.toggle("schpadoinkle");
    boop.nextElementSibling.classList.toggle("schpadoinkle");
  });
});

// copyright

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
