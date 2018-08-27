$(document).ready(function(){   //for slider
    $('.slider').bxSlider();
    });

    
//MENU
var btns = document.getElementsByClassName("header-menu__link");

btns[0].addEventListener("click", function() {
    btns[0].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[1].addEventListener("click", function() {
    btns[1].classList.add("active-item");
    btns[0].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[2].addEventListener("click", function() {
    btns[2].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[0].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[3].addEventListener("click", function() {
    btns[3].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[0].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[4].addEventListener("click", function() {
    btns[4].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[0].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[5].addEventListener("click", function() {
    btns[5].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[0].classList.remove("active-item");
    btns[6].classList.remove("active-item");
});

btns[6].addEventListener("click", function() {
    btns[6].classList.add("active-item");
    btns[1].classList.remove("active-item");
    btns[2].classList.remove("active-item");
    btns[3].classList.remove("active-item");
    btns[4].classList.remove("active-item");
    btns[5].classList.remove("active-item");
    btns[0].classList.remove("active-item");
});