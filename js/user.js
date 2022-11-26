const userInfo = document.querySelector("#user-info");
const userDom  = document.querySelector("#user");
const links    = document.querySelector("#links");
const logout   = document.querySelector("#logout");

logout.addEventListener("click",logoutt);

function logoutt() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "index (3).html";
    })
};


if(localStorage.getItem("username")) {
    links.remove();
    userInfo.style.display = "block";
    userDom.innerHTML = localStorage.getItem("username")
}