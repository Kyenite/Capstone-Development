const loginId = document.getElementsByTagName("input")[0];
const password = document.getElementsByTagName("input")[1];
const loginBtn = document.getElementsByTagName("input")[2];

const hideBtn = document.getElementById("hide-btn");

// Input Value Checker

loginId.addEventListener("input", function() {
    if(loginId.value !== ""){
        loginId.classList.add("is-valid");
    } else {
        loginId.classList.remove("is-valid");
    }
});

password.addEventListener("input", function() {
    if(password.value !== ""){
        password.classList.add("is-valid");
    } else {
        password.classList.remove("is-valid");
    }
});

loginBtn.addEventListener("click", function() {
    if(loginId.value !== "" && password.value !== ""){
        window.location.href = "./main/dashboard/index.html";
    } else {
        loginId.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
});

// Hide Password

var hidestat = true;

hideBtn.addEventListener("click", function() {
    if(hidestat){
        hideBtn.classList.remove("fa-eye");
        hideBtn.classList.add("fa-eye-slash");
        password.type = 'text';
    } else {
        hideBtn.classList.remove("fa-eye-slash");
        hideBtn.classList.add("fa-eye");
        password.type = 'password';
    }

    hidestat = !hidestat;
})