setInterval(() => {
    const colors = ["#FFDDC1", "#DFF6FF", "#F4FFB8", "#F5C7F7"];
    document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
}, 5000);
