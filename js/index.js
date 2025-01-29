document.addEventListener("DOMContentLoaded", function() {
    function myFunction() {
        const menu = document.querySelector(".menu-left");
        console.log("Menu toggled"); 
        menu.classList.toggle("show"); // Toggle the "show" class
    }
});
