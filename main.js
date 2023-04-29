let pBtn = document.querySelector(".firstBtn");
let sBtn = document.querySelector(".secondBtn");
let project = document.querySelector(".projects");
let skills = document.querySelector(".skills");
let btn = document.querySelector(".profile")
let img = document.querySelector("img")




if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("darkMode");

    document.getElementById("moonIcon").src = "sun.png"; // Update with your dark mode icon image source

}
document.getElementById("switchTheme").addEventListener("click", function() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle("darkMode");
    localStorage.setItem("darkMode", document.body.classList.contains("darkMode"));


   
    document.body.classList.add("fadeIn");
  
    setTimeout(function() {
        document.body.classList.remove("fadeIn");
    }, 300);

   const fotos = document.querySelectorAll('.profileSocail img');

    if (moonIcon.src.includes("moon.png")) {
        moonIcon.src = "sun.png";
        moonIcon.alt = "Sun Image";
        fotos.forEach(foto => {
            foto.style.filter = "invert(100%)";
        });
    } else {
        moonIcon.src = "moon.png";
        moonIcon.alt = "Moon Image";
        fotos.forEach(foto => {
            foto.style.filter = "invert(0%)";
        });
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



var count = parseInt(localStorage.getItem('visitCount')) || 0;


localStorage.setItem('visitCount', ++count);


if (document.location.search.indexOf('showVisitCount') !== -1) {
    document.write('This page has been visited ' + count + ' times.');
}
