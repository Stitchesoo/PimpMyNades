const colorButton = document.getElementById("colorModeButton");
const scrollButton = document.getElementById("scrollToTopButton");
const logo = document.getElementById("main-logo");
const bodyBackground = document.querySelector("body");
const colorModeIcon = document.getElementById("colorMode")


function currentColorMode() {
    if (bodyBackground.classList == "backgroundNight") {
        lightMode();
    } else if (bodyBackground.classList == "backgroundLight") {
        nightMode();
    }
};

function lightMode() {
    bodyBackground.classList.remove("backgroundNight");
    bodyBackground.classList.add("backgroundLight");
    logo.innerHTML = "<img id='logo' src='images/logo-black.png'>";
    scrollButton.style.backgroundColor = "rgba(240, 240, 240, 0.6)";
};

function nightMode() {
    bodyBackground.classList.remove("backgroundLight");
    bodyBackground.classList.add("backgroundNight");
    logo.innerHTML = "<img id='logo' src='images/logo-white.png'>";
    scrollButton.style.backgroundColor = "rgba(20, 20, 20, 0.6)";
};