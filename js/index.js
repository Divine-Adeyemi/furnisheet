
    
    function myFunction() {
        var x = document.querySelector(".menu-left"); // Get first element
        
        if (x) {
            x.classList.toggle("show"); }

        }
        function openLocationModal() {
    document.getElementById("locationModal").style.display = "block";
}

function closeLocationModal() {
    document.getElementById("locationModal").style.display = "none";
}

// Close modal when clicking outside the container
window.onclick = function(event) {
    var modal = document.getElementById("locationModal");
    if (event.target !== modal && !modal.contains(event.target) && event.target.tagName !== "A") {
        modal.style.display = "none";
    }
};
document.getElementById("needHelpBtn").addEventListener("click", function () {
  document.getElementById("chatbox").style.display = "block";
});

document.getElementById("closeChatbox").addEventListener("click", function () {
  document.getElementById("chatbox").style.display = "none";
});

    