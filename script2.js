document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1");
    header.addEventListener("mouseover", () => {
        header.style.color = "#e74c3c";
        header.style.cursor = "pointer";
    });

    header.addEventListener("mouseleave", () => {
        header.style.color = "#2c3e50";
    });
});
