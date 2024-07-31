const hideBtn = document.getElementById("hide-btn");

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