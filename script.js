const loginId = document.getElementById("loginId");
const password = document.getElementById("password");
const loginBtn = document.getElementsByClassName("btn")[0];

const hideBtn = document.getElementById("hide-btn");

// Send Request to login.php

function checkLoginCredentials() {
    showResult(true);
}

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
        checkLoginCredentials(loginId.value );

        loginBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
        loginBtn.disabled = true;
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
});

function showResult(state) {

    loginBtn.innerHTML = 'Login';
    loginBtn.disabled = false;

    if(state){
        var iconOutput = "success";
        var textContent = "Login successful!";
    } else {
        var iconOutput = "error";
        var textContent = "Invalid login credentials!"
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didClose: () => {
            if(state){
                window.location.href = './main/dashboard/index.html';
            }
        }
      });
      Toast.fire({
        icon: iconOutput,
        title: textContent
      });
}