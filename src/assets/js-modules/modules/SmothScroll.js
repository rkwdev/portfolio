import $ from "jquery";
import "jquery.easing";
import smothScroll from "jquery-smooth-scroll";

class SmothScroll {
    constructor() {
        this.navItems = $(".menu a");
        this.brandLogo = $(".brand__logo");
        this.addSmoothScrolling();
        this.addNavActive();
    }

    addSmoothScrolling() {
        this.navItems.smoothScroll({
            easing: "easeInOutBack",
            speed: 1200
        });
        this.brandLogo.smoothScroll({
            easing: "easeInOutBack",
            speed: 1200
        });
    }

    addNavActive() {
        $(".menu a").click(function() {
            $(".menu a").removeClass("active");
            $(this).addClass("active");
        });
        $(".brand__logo").click(function() {
            $(".menu a").removeClass("active");
        });
    }
}

export default SmothScroll;
