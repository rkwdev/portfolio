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
        window.onscroll = function() {
            let scrollPosY = window.pageYOffset | document.body.scrollTop;

            $("section").each(function(i) {
                if ($(this).position().top < scrollPosY + 150) {
                    $(".menu a.active").removeClass("active");
                    $(".menu a")
                        .eq(i)
                        .addClass("active");
                }
            });
        };

        // $(".menu a").click(function() {
        //     $(".menu a").removeClass("active");
        //     $(this).addClass("active");
        // });
        // $(".brand__logo").click(function() {
        //     $(".menu a").removeClass("active");
        // });
    }
}

export default SmothScroll;
