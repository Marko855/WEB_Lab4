window.addEventListener("load", () => {
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Stranica se učitala za ${loadTime} ms.`);
});
