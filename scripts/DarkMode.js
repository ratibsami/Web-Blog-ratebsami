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


const darkModeToggle = document.getElementById("dark-mode-toggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".darkmode-icon");

darkModeToggle.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
        
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
         
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
});


