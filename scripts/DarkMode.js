const toggleDarkMode = () => {
    const body = document.body;

    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
};

const updateMode = () => {
    const body = document.body;


    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";

 
    if (isDarkModePreferred) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
};

const button = document.getElementById("dark-mode-toggle");
button.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", updateMode);


window.addEventListener("popstate", updateMode);



