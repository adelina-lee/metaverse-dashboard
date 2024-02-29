// Get the modal
var modalWalletWithdraw = document.getElementById("modalWalletWithdraw");

// Get the button that opens the modal
var btnWithdraw = document.getElementById("btnWithdraw");

// Get the <span> element that closes the modal
var btnCloseWithdraw = document.getElementsByClassName("btnCloseWithdraw")[0];

// When the user clicks the button, open the modal 
btnWithdraw.onclick = function() {
    modalWalletWithdraw.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCloseWithdraw.onclick = function() {
    modalWalletWithdraw.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWalletWithdraw) {
    modalWalletWithdraw.style.display = "none";
  }
}