//styleSwitcherToggler
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});


//scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});



//light and dark
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
   if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
   }else {
        dayNight.querySelector("i").classList.add("fa-moon");
   }
});

let footer_2 = document.querySelector(".footer_2 span");
let name = document.querySelector(".name");
let typing = document.querySelector(".typing");
let btn = document.querySelector(".btn");
let active = document.querySelector(".active");
let web = document.querySelector(".web")
let btns = document.querySelector(".btns");
let btnss = document.querySelector(".btnss");
let contactTitle = document.querySelector(".contact-title");
let back = document.querySelector(".back");
let btnbtn = document.querySelector(".btnbtn");
let user = document.querySelector("#user");

function changeColor(color) {
    active.style.color = color;
    user.style.color = color;
    footer_2.style.background = color;
   

    let span = document.querySelectorAll("span");

    span.forEach(function(item) {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
}