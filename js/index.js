
    
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

