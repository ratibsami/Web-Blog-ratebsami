//DarkMode Style DesignXperience ©️ Copyright all rights
const toggleDarkMode = () => {
    const body = document.body;

    body.classList.toggle("dark-mode");
};

const updateMode = () => {
    const body = document.body;
    const isDarkModePreferred = 
    window.matchMedia("prefers-color-scheme: dark").matches;

    if (isDarkModePreferred) {
        body.classList.add("dark-mode");
    }  else {

            body.classList.remove("dark-mode");
        }

    
}

const button =
document.getElementById("dark-mode-toggle");
button.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", updateMode);

