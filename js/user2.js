const usernames    = document.querySelector("#username");
const emails       = document.querySelector("#email");
const subject      = document.querySelector("#subject");
const Message      = document.querySelector("#Message"); 
const rehisterBtns = document.querySelector("#submit");


rehisterBtns.addEventListener("click",register); 


function register(e) {
    e.preventDefault();
    if(usernames.value === "" || emails.value === "" || subject.value === "") {
        alert("Please Enter data");
    }else {
        localStorage.setItem("username",  usernames.value);
        localStorage.setItem("email",  emails.value);
        localStorage.setItem("subject",  subject.value);

        setTimeout(() => {
            window.location = "portfolio.html";
        }, 1500);
    }
    
};