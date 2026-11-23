
const THEME_KEY = "shelfTheme";

export function applyTheme(theme) {
    const selectedTheme = theme === "dark" ? "dark" : "light";

    document.body.classList.toggle(
        "dark",
        selectedTheme === "dark"
    );

    localStorage.setItem(THEME_KEY, selectedTheme);
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    const theme = savedTheme === "dark" ? "dark" : "light";

    document.body.classList.toggle("dark", theme === "dark");

    return theme;
}

export function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");

    const theme = isDark ? "dark" : "light";

    localStorage.setItem(THEME_KEY, theme);

    return theme;
}
