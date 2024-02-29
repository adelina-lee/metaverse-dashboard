// Get the modal
var modalInviteAffiliates = document.getElementById("modalInviteAffiliates");

// Get the button that opens the modal
var btnInviteAffiliates = document.getElementById("btnInviteAffiliates");

// Get the <span> element that closes the modal
var btnCloseInviteAffiliates = document.getElementsByClassName("btnCloseInviteAffiliates")[0];

// When the user clicks the button, open the modal 
btnInviteAffiliates.onclick = function() {
  modalInviteAffiliates.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCloseInviteAffiliates.onclick = function() {
  modalInviteAffiliates.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalInviteAffiliates) {
    modalInviteAffiliates.style.display = "none";
  }
}