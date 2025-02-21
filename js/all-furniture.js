document.addEventListener("DOMContentLoaded", function () {
    const sortDropdown = document.querySelector(".custom-select select");
    const furnitureContainer = document.querySelector(".all-furniture");

    if (!sortDropdown || !furnitureContainer) {
        console.error("❌ Sorting dropdown or furniture container not found!");
        return;
    }

    sortDropdown.addEventListener("change", function () {
        let items = Array.from(furnitureContainer.querySelectorAll(".furniture-item"));

        items = items.filter(item => item.querySelector("h3")); // Exclude the last 'Make a request' item

        items.sort((a, b) => {
            const nameA = a.querySelector("h3").textContent.trim();
            const nameB = b.querySelector("h3").textContent.trim();
            const priceA = extractPrice(a);
            const priceB = extractPrice(b);

            switch (sortDropdown.value) {
                case "1": // Best Selling (For now, just sort alphabetically as placeholder)
                    return nameA.localeCompare(nameB);
                case "2": // High to Low
                    return priceB - priceA;
                case "3": // Low to High
                    return priceA - priceB;
                default: // Recommended (default order)
                    return 0;
            }
        });

        // Re-insert sorted items into the container
        items.forEach(item => furnitureContainer.appendChild(item));
    });

    function extractPrice(item) {
        const priceText = item.querySelector("p:last-of-type")?.textContent || "";
        const priceMatch = priceText.match(/N([\d,]+)/);
        return priceMatch ? parseInt(priceMatch[1].replace(/,/g, ""), 10) : 0;
    }
});
 document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".custom-dropdown");
    const button = dropdown.querySelector(".dropdown-btn");
    const options = dropdown.querySelectorAll(".dropdown-options li");
    const selectedText = button.querySelector("span");

    // Toggle dropdown on click
    button.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    // Handle option selection
    options.forEach(option => {
        option.addEventListener("click", function () {
            selectedText.textContent = this.textContent; // Update button text
            dropdown.classList.remove("active"); // Close dropdown
            options.forEach(opt => opt.classList.remove("selected")); // Remove selected class
            this.classList.add("selected"); // Add selected class
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});
