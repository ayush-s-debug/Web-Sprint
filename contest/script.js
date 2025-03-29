const cards = document.querySelectorAll(".card");
const descriptionBox = document.getElementById("description");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const desc = card.getAttribute("data-desc");
        descriptionBox.textContent = desc;
        descriptionBox.style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
        descriptionBox.style.display = "none";
    });
});
