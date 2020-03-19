class Menu {
    constructor() {
        this.menuBtn = document.querySelector(".nav-toggler");
        this.menu = document.querySelector(".menu");
        this.showMenu = false;
        this.toggleMenu();
    }

    toggleMenu() {
        this.menuBtn.addEventListener("click", () => {
            if (!this.showMenu) {
                this.menu.classList.add("open");
                this.menuBtn.classList.add("open");

                this.showMenu = true;
            } else {
                this.menu.classList.remove("open");
                this.menuBtn.classList.remove("open");

                this.showMenu = false;
            }
        });
    }
}

export default Menu;
