// Set initial theme based on saved preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateThemeToggleButton(savedTheme);
    }
}

// Toggle between light and dark mode
function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
        updateThemeToggleButton("light-mode");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
        updateThemeToggleButton("dark-mode");
    }
}

// Update the theme toggle button icon
function updateThemeToggleButton(currentTheme) {
    const themeToggle = document.getElementById("themeToggle");
    if (currentTheme === "dark-mode") {
        themeToggle.textContent = "☀️"; // Sun icon for switching to light mode
    } else {
        themeToggle.textContent = "🌙"; // Moon icon for switching to dark mode
    }
}
