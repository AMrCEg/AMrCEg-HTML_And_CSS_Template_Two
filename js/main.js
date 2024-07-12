//  Header Burger Menu Icon On Mobile Display
let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector("nav ul");

toggleMenu.onclick = function () {
    links.classList.toggle("clicked");
}

// Change Background image
let leftArrow = document.querySelector(".fa-angle-left");
let rightArrow = document.querySelector(".fa-angle-right");
let landing = document.querySelector(".landing ");

//     background-image: url("../images/landing.jpg");
//     background-image: url("../images/shuffle-0${i}.jpg");

// i 1~8

let i = 1;

leftArrow.onclick = function () {
    if (i >= 1) {
        landing.style.backgroundImage = `url("images/shuffle-0${i}.jpg")`;
        i--;
    }
}

rightArrow.onclick = function () {
    if (i <= 8) {
        landing.style.backgroundImage = `url("images/shuffle-0${i}.jpg")`;
        i++
    }
}
