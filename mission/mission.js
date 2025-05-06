document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme-selector");
    const body = document.body;

    // Set initial theme based on current body class
    themeSelector.value = body.classList.contains("dark") ? "dark" : "light";

    themeSelector.addEventListener("change", function () {
        body.classList.remove("light", "dark");
        body.classList.add(this.value);
    });
});
