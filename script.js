const loginId = document.getElementsByTagName("input")[0];
const password = document.getElementsByTagName("input")[1];
const loginBtn = document.getElementsByTagName("input")[2];

const hideBtn = document.getElementById("hide-btn");

// Send Request to login.php

function checkLoginCredentials() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'login.php', true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Handle the response from the server
                showResult(true, xhr.responseText);
                console.log('Response:', xhr.responseText);
            } else {
                showResult(false, xhr.responseText);
                console.error('Request failed. Status:', xhr.status);
            }
        }
    }

    const data = `loginId=${loginId.value}&password=${password.value}`;

    xhr.send(data);
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
        checkLoginCredentials();
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

function showResult(state ,title) {

    if(state){
        var iconOutput = "success";
    } else {
        var iconOutput = "error";
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
        title: title
      });
}