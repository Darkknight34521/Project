window.addEventListener("scroll", () => {
    document.querySelectorAll(".event-card").forEach(card => {
        let pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
