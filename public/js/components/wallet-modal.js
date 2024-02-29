// Get the modal
var modalWallet = document.getElementById("modalWallet");

// Get the button that opens the modal
var btnWallet = document.getElementById("btnWallet");

// Get the <span> element that closes the modal
var btnCloseWallet = document.getElementsByClassName("btnCloseWallet")[0];

// When the user clicks the button, open the modal 
btnWallet.onclick = function() {
  modalWallet.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCloseWallet.onclick = function() {
  modalWallet.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWallet) {
    modalWallet.style.display = "none";
  }
}