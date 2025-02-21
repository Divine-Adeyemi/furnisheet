
    
    function myFunction() {
        var x = document.querySelector(".menu-left"); // Get first element
        
        if (x) {
            x.classList.toggle("show"); }

        }
        function openLocationModal() {
    document.getElementById("locationModal").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.querySelector(".breadcrumbs");

    if (!breadcrumbContainer) {
        console.error("❌ Breadcrumb container not found!");
        return;
    }

    // Get current page URL (excluding query params)
    let currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Convert "index.html" to "Home"
    let formattedCurrentPage = currentPage === "index.html" ? "Home" : formatBreadcrumb(currentPage);

    // Retrieve breadcrumb history or initialize it
    let breadcrumbHistory = JSON.parse(sessionStorage.getItem("breadcrumbHistory")) || ["Home"];

    // Remove "index.html" if already in the list
    if (breadcrumbHistory[0] === "index.html") {
        breadcrumbHistory[0] = "Home";
    }

    // If revisiting an earlier page, truncate the trail
    let currentPageIndex = breadcrumbHistory.indexOf(formattedCurrentPage);
    if (currentPageIndex !== -1) {
        breadcrumbHistory = breadcrumbHistory.slice(0, currentPageIndex + 1);
    } else {
        breadcrumbHistory.push(formattedCurrentPage);
    }

    // Save updated breadcrumbs
    sessionStorage.setItem("breadcrumbHistory", JSON.stringify(breadcrumbHistory));

    // Generate breadcrumb HTML
    breadcrumbContainer.innerHTML = breadcrumbHistory
        .map((page, index) => {
            let pageURL = page === "Home" ? "index.html" : page.replace(/\s/g, "-").toLowerCase() + ".html";

            return index < breadcrumbHistory.length - 1
                ? `<a href="${pageURL}" class="breadcrumb-link" data-page="${page}">${page}</a>`
                : `<span>${page}</span>`;
        })
        .join(" > ");

    // Handle clicking on a breadcrumb to go back
    document.querySelectorAll(".breadcrumb-link").forEach(link => {
        link.addEventListener("click", function (event) {
            let clickedPage = this.getAttribute("data-page");
            let newHistory = breadcrumbHistory.slice(0, breadcrumbHistory.indexOf(clickedPage) + 1);
            sessionStorage.setItem("breadcrumbHistory", JSON.stringify(newHistory));
        });
    });
});

// Format breadcrumb text (e.g., "all-furniture.html" → "All Furniture")
function formatBreadcrumb(filename) {
    return filename.replace(".html", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function closeLocationModal() {
    document.getElementById("locationModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const furnitureLink = document.querySelector("[dropdown-toggle]"); // Selects the "Furniture" link
    const megaMenu = document.querySelector(".mega-menu");

    // Toggle dropdown on click
    furnitureLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents page jump
        event.stopPropagation(); // Prevents immediate closing
        megaMenu.classList.toggle("show"); // Toggle visibility
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!furnitureLink.contains(event.target) && !megaMenu.contains(event.target)) {
            megaMenu.classList.remove("show");
        }
    });
});




    document.addEventListener("DOMContentLoaded", function () {
        const needHelpBtn = document.getElementById("needHelpBtn");
        const chatbox = document.getElementById("chatbox");
        const closeChatbox = document.getElementById("closeChatbox");
        const sendBtn = document.querySelector(".send-btn");
        const chatboxBody = document.querySelector(".chatbox-body");
        const textarea = document.querySelector("textarea");
    
        // Open chatbox with sliding animation
        needHelpBtn.addEventListener("click", function () {
            chatbox.classList.add("show");
            chatbox.style.transform = "translateY(0)"; // Slide in
            chatbox.style.opacity = "1";
        });
    
        // Close chatbox with sliding animation
        closeChatbox.addEventListener("click", function () {
            chatbox.style.transform = "translateY(100%)"; // Slide out
            chatbox.style.opacity = "0";
            setTimeout(() => chatbox.classList.remove("show"), 300); // Wait for animation to complete
        });
    
        // Send message function
        sendBtn.addEventListener("click", function () {
            sendMessage();
        });
    
        // Allow Enter key to send message
        textarea.addEventListener("keypress", function (event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });
    
        function sendMessage() {
            const message = textarea.value.trim();
    
            if (message !== "") {
                // Create sent message bubble (User message)
                const sentMessage = document.createElement("div");
                sentMessage.classList.add("chat-message", "sent-message");
                sentMessage.textContent = message;
    
                chatboxBody.appendChild(sentMessage);
                textarea.value = "";
    
                // Auto-scroll to bottom
                chatboxBody.scrollTop = chatboxBody.scrollHeight;
    
                // Simulate bot response after 1 second
                setTimeout(() => {
                    const receivedMessage = document.createElement("div");
                    receivedMessage.classList.add("chat-message", "received-message");
                    receivedMessage.textContent = "yo! yo! yo! I'm kiddingg!";
    
                    chatboxBody.appendChild(receivedMessage);
                    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Ensure it stays scrolled down
                }, 1000);
            }
        }
    });
    


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

document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const dropdownContent = this.closest(".container9-comment").querySelector(".dropdown-content");
            const icon = this.querySelector("i");


               // Close all other open dropdowns
               document.querySelectorAll(".dropdown-content").forEach(content => {
                if (content !== dropdownContent) {
                    content.style.display = "none";
                    const otherIcon = content.closest(".container9-comment").querySelector(".faq-toggle i");
                    if (otherIcon) otherIcon.classList.replace("fa-circle-caret-up", "fa-circle-caret-down");
                }
            });


            // Toggle visibility of dropdown content
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                icon.classList.replace("fa-circle-caret-up", "fa-circle-caret-down"); // Change icon
            } else {
                dropdownContent.style.display = "block";
                icon.classList.replace("fa-circle-caret-down", "fa-circle-caret-up"); // Change icon
            }
        });
    });
});
;

