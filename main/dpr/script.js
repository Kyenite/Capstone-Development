const confirmRequestForm = document.getElementById("confirmForm");

confirmRequestForm.addEventListener("click", function() {
    Swal.fire({
        title: "Request Added!",
        icon: "success",
        confirmButtonText: "Confirm"
    });
});