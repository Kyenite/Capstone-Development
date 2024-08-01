const confirmRequestForm = document.getElementById("confirmForm");
const confirmCancelRequest = document.getElementById("cancelRequest");
const confirmCheckDetails = document.getElementById("confirmCheckDetails");

// Confirm Request Popup
confirmRequestForm.addEventListener("click", function() {
    
    var dprFormModal = document.getElementById("DPR-Form");
    var modal = bootstrap.Modal.getInstance(dprFormModal);

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to add new request?",
        showCancelButton: true,
        cancelButtonText: `Go Back`,
        confirmButtonText: "Add",
        reverseButtons: true
      }).then((result) => {
        
        if (result.isConfirmed) {
          showRequestAddedPopup();
          modal.hide();
        }
      });
    
});

// Cancel Request Confirmation
confirmCancelRequest.addEventListener("click", function() {
    
    var checkDetailsModal = document.getElementById("checkDetails");
    var modal = bootstrap.Modal.getInstance(checkDetailsModal);

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to cancel request?",
        showCancelButton: true,
        cancelButtonText: `Go Back`,
        confirmButtonText: "Yes",
        reverseButtons: true
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Request Cancelled!", "", "success");
          modal.hide();
        }
      });
});

// Confirm Check Details
confirmCheckDetails.addEventListener("click", function() {
    
    var checkDetailsModal = document.getElementById("checkDetails");
    var modal = bootstrap.Modal.getInstance(checkDetailsModal);

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to add check details?",
        showCancelButton: true,
        cancelButtonText: `Go Back`,
        confirmButtonText: "Yes",
        reverseButtons: true
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Check Details Added!", "", "success");
          modal.hide();
        }
      });
});

// Add Request Confirmation
function showRequestAddedPopup() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
      Toast.fire({
        icon: "success",
        title: "Request Added!"
      });
}