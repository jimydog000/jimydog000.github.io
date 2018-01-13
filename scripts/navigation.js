$(document).ready(function () {
    "use strict";
    var $mn = $('#mainNav'), $n = $('nav'), mNavOffsetTop = $n[0].offsetTop;

    $n.wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($mn.outerHeight());

    //Fix nav to the top of the page when the viewport nears the nav
    $(document).bind('ready scroll', function () {
        var docScroll = $(this).scrollTop();

        if (docScroll >= mNavOffsetTop) {
            $n.addClass('fixed');
        } else {
            $n.removeClass('fixed');
        }
    });
});

var query = false, didScroll, $menu = $('.mb');

// Script to open and close sidebar on click event
function sidebar_close() {
    "use strict";
    document.getElementById("sidebar").style.display = "none";
    $menu.removeClass("fa-times").addClass("fa-bars");
    query = false;
}
function sidebar_open() {
    "use strict";
    if (query === false) {
        document.getElementById("sidebar").style.display = "block";
        $menu.removeClass("fa-bars").addClass("fa-times");
        query = true;
    } else if (query === true) {
        sidebar_close();
    }
}

//Close sideBar on scroll, but wait for .75 seconds
$(window).scroll(function (event) {
    "use strict";
    didScroll = true;
});
setInterval(function () {
    "use strict";
    if (didScroll) {
        sidebar_close();
        didScroll = false;
    }
}, 750);
