const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
    );
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoptions = {
    distance: "58px",
    origin: "bottom",
    duration: 1200,
};

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealoptions,
    delay: 200,
});
ScrollReveal().reveal(".header-container p", {
    ...scrollRevealoptions,
    delay: 700,
});
ScrollReveal().reveal(".header-container .header-btn", {
    ...scrollRevealoptions,
    delay: 1100,
});
ScrollReveal().reveal(".header-container .socials li", {
    ...scrollRevealoptions,
    delay: 1200,
    interval: 120,
});