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


let name = document.querySelector(".name");
let typing = document.querySelector(".typing");
let btn = document.querySelector(".btn");
let active = document.querySelector(".active");
let web = document.querySelector(".web");
let btns = document.querySelector(".btns");
let btnss = document.querySelector(".btnss");
let contactTitle = document.querySelector(".contact-title");
let back = document.querySelector(".back");
let btnbtn = document.querySelector(".btnbtn");
let user = document.querySelector("#user");
let footer_2 = document.querySelector(".footer_2 span");
let faPhone = document.querySelector(".fa-phone"); 
let faMapMarkerAlt = document.querySelector(".fa-map-marker-alt"); 
let faEnvelope = document.querySelector(".fa-envelope"); 
let faGlobeEurope = document.querySelector(".fa-globe-europe"); 
let faMobileAlt = document.querySelector(".fa-mobile-alt"); 
let faLaptopCode = document.querySelector(".fa-laptop-code"); 
let faPalette = document.querySelector(".fa-palette"); 
let faCode = document.querySelector(".fa-code"); 
let faSearch = document.querySelector(".fa-search"); 
let faBullhorn = document.querySelector(".fa-bullhorn"); 

function changeColor(color) {
    name.style.color = color;  
    active.style.color = color;
    typing.style.color = color;
    web.style.color = color;
    back.style.color = color;
    user.style.color = color;
    contactTitle.style.color = color;
    faPhone.style.color = color;
    faMapMarkerAlt.style.color = color;
    faEnvelope.style.color = color;
    faGlobeEurope.style.color = color;
    faMobileAlt.style.color = color;
    faLaptopCode.style.color = color;
    faPalette.style.color = color;
    faCode.style.color = color;
    faSearch.style.color = color;
    faBullhorn.style.color = color;
    btn.style.background = color;
    btns.style.background = color;
    btnss.style.background = color;
    btnbtn.style.background = color;
    footer_2.style.background = color;
    
    let span = document.querySelectorAll("span");

    span.forEach(function(item) {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
}

var firstIndex = 0;
function automaticSlide() {
    setTimeout(automaticSlide ,4000)
    var pics; 
    const img = document.querySelectorAll(".img-box");
    for (let pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
    }
    firstIndex++;
    if(firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex -1].style.display = "block";
}
automaticSlide();