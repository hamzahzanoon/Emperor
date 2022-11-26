const username    = document.querySelector("#username");
const email       = document.querySelector("#email");
const password    = document.querySelector("#password");
const rehisterBtn = document.querySelector("#sign-up");


rehisterBtn.addEventListener("click",register) 


function register(e) {
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === "") {
        alert("Please Enter data");
    }else {
        localStorage.setItem("username",  username.value);
        localStorage.setItem("email",  email.value);
        localStorage.setItem("password",  password.value);

        setTimeout(() => {
            window.location = "index (3).html";
        }, 1500);
    }
};