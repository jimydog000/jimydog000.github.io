function sidebar_open(){query===!1?(document.getElementById("mySidebar").style.display="block",$(".fa").removeClass("fa-bars").addClass("fa-times"),query=!0):query===!0&&(document.getElementById("mySidebar").style.display="none",$(".fa").removeClass("fa-times").addClass("fa-bars"),query=!1)}function sidebar_close(){document.getElementById("mySidebar").style.display="none",$(".fa").removeClass("fa-times").addClass("fa-bars"),query=!1}function WidthChange(e){e.matches&&sidebar_close()}var query=!1,srcEl=document.getElementById("mySidebar"),fa_bars=document.getElementsByClassName("collpsnav-hide-large");if($(document).on("click mousedown mouseup scroll",function(e){$(e.target).closest(fa_bars).length||$(e.target).closest(srcEl).length||query===!0&&sidebar_close()}),matchMedia){const mq=window.matchMedia("(min-width: 900px)");mq.addListener(WidthChange),WidthChange(mq)}