let pBtn = document.querySelector(".firstBtn");
let sBtn = document.querySelector(".secondBtn");
let project = document.querySelector(".projects");
let skills = document.querySelector(".skills");
let btn = document.querySelector(".profile")
let img = document.querySelector("img")


// JavaScript code to toggle dark mode when the moon image is clicked

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("darkMode");

    document.getElementById("moonIcon").src = "sun.png"; // Update with your dark mode icon image source

}
document.getElementById("switchTheme").addEventListener("click", function() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle("darkMode");
    localStorage.setItem("darkMode", document.body.classList.contains("darkMode"));


    // Add fade-in animation class for a smooth transition
    document.body.classList.add("fadeIn");
    // Remove fade-in animation class after 0.3 seconds
    setTimeout(function() {
        document.body.classList.remove("fadeIn");
    }, 300);

    // Toggle moon icon source when toggling dark mode
    var moonIcon = document.getElementById("moonIcon");
    if (moonIcon.src.includes("moon.png")) {
        moonIcon.src = "sun.png"; // Update with the path to your sun icon
        moonIcon.alt = "Sun Image"; // Update with your sun icon alt text
    } else {
        moonIcon.src = "moon.png"; // Update with the path to your moon icon
        moonIcon.alt = "Moon Image"; // Update with your moon icon alt text
    }
});


// blur background
btn.addEventListener("click", () => {
    btn.classList.toggle("active")
    btn.classList.toggle("blur")

})


// JavaScript code

const projectsBtn = document.getElementById('projectsBtn');
const skillsBtn = document.getElementById('skillsBtn');
const projectsDiv = document.querySelector('.projects');
const skillsDiv = document.querySelector('.skills');

skillsBtn.addEventListener("click", function() {
    if (skillsDiv.style.display === "none") {
        skillsDiv.style.display = "flex";
        projectsDiv.style.display = "none";
    } else {
        skillsDiv.style.display = "none";
    }
});

projectsBtn.addEventListener("click", function() {
    if (projectsDiv.style.display === "none") {
        projectsDiv.style.display = "flex";
        skillsDiv.style.display = "none";
    } else {
        projectsDiv.style.display = "none";
    }
});

//preloader
let loader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";

})


// Get the current count from local storage or initialize it to 0
var count = parseInt(localStorage.getItem('visitCount')) || 0;

// Increment the count and store it back in local storage
localStorage.setItem('visitCount', ++count);

// Display the count only to the site owner
if (document.location.search.indexOf('showVisitCount') !== -1) {
    document.write('This page has been visited ' + count + ' times.');
}
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});