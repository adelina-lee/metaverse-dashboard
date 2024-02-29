// Get the modal
var modalUnlockReferral = document.getElementById("modalUnlockReferral");

// Get the button that opens the modal
var btnJoinNow = document.getElementById("btnJoinNow");

// Get the <span> element that closes the modal
var btnCloseUnlockReferral = document.getElementsByClassName("btnCloseUnlockReferral")[0];

// When the user clicks the button, open the modal 
btnJoinNow.onclick = function() {
    modalUnlockReferral.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCloseUnlockReferral.onclick = function() {
    modalUnlockReferral.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalUnlockReferral) {
    modalUnlockReferral.style.display = "none";
  }
}