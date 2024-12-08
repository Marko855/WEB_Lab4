document.addEventListener("DOMContentLoaded", () => {
    console.log("HTTP/2 Test: Page Loaded");
    const images = document.querySelectorAll("img");
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            alert(`You clicked on Image ${index + 1}`);
        });
    });
});
