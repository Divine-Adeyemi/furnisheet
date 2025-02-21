class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="dropdown-menu">
                        <a href="javascript:void(0);" class="icon" onclick="toggleDropdown()">
                            <i class="fa fa-bars"></i>
                        </a>
                        <ul class="menu-left">
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">About Furnisheet</a></li>
                        </ul>
                    </div>
                    <div class="logo">
                        <img src="images/logo1.png" alt="logo">
                    </div>
                    <ul class="menu-right">
                        <li><a href="#"><img src="images/ACCOUNT.svg"></a></li>
                        <li><a href="#"><img src="images/SEARCH.svg"></a></li>
                        <li><a href="#"><img src="images/CART.svg"></a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define("my-navbar", Navbar);
