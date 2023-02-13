let button = document.getElementById("scrollToTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

function scrollToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}