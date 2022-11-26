const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#sign-in");

let getUser     = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click",login);

function login(e) {
    e.preventDefault();
    if(username.value === "" || password.value === "") {
        alert("Please Enter data")
    }else {
        if((getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value)) {
           setTimeout(() => {
            window.location = "index.html"
           },1000)
        }else {
            console.log("Please Enter data Error");
        };
    }
};