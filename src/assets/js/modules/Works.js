const $ = require("jquery");
import mixitup from "mixitup";

class Works {
    constructor() {
        this.mixer = mixitup(".works__wrapper");
        this.filter();
    }

    filter() {
        $(".works__controls li").click(function() {
            $(".works__controls li").removeClass("active");
            $(this).addClass("active");
        });
    }
}

export default Works;
