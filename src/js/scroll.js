var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");
var logoBlanco = document.getElementById("logo-blanco");
var logoColor = document.getElementById("logo-color");
var textNav = document.querySelectorAll(".text-menu-nav");

document.addEventListener("scroll", function () {
    /*Apply classes for slide in bar*/
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        logoBlanco.classList.add("hidden");
        logoColor.classList.remove("hidden");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }
        for (var i = 0; i < textNav.length; i++) {
            textNav[i].classList.add("text-blue-500");
            textNav[i].classList.remove("text-blue-100");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
    } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        logoBlanco.classList.remove("hidden");
        logoColor.classList.add("hidden");
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
        }
        for (var i = 0; i < textNav.length; i++) {
            textNav[i].classList.add("text-blue-100");
            textNav[i].classList.remove("text-blue-500");
        }
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
    }
});
