// Get the modal
var modalConfirmPayment = document.getElementById("modalConfirmPayment");

// Get the button that opens the modal
var btnConfirmPayment = document.getElementById("btnConfirmPayment");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btnCloseConfirmPayment")[0];

// When the user clicks the button, open the modal 
btnConfirmPayment.onclick = function () {
  modalConfirmPayment.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalConfirmPayment.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalConfirmPayment.style.display = "none";
  }
}