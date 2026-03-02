// ==============================
// HAMBURGER MENU
// ==============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// ==============================
// THEME TOGGLE (WORKING VERSION)
// ==============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme on refresh
if (localStorage.getItem("theme") === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {

    if (document.documentElement.getAttribute("data-theme") === "light") {

        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    } else {

        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }

});