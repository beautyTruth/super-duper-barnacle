document.querySelectorAll(".story-btn").forEach((boop) => {
  boop.addEventListener("click", () => {
    boop.classList.toggle("schpadoinkle");
    boop.nextElementSibling.classList.toggle("schpadoinkle");
  });
});
