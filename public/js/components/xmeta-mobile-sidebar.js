 function openMobileSidebarNav() {
    document.getElementById("xmeta-mobile-sidebar").style.width = "280px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.filter = "blur(8px)";
}

function closeMobileSidebarNav() {
    document.getElementById("xmeta-mobile-sidebar").style.width = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("main").style.filter = "blur(0px)";
} 