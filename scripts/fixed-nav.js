$("nav").wrap('<div class="nav-placeholder"></div>'),$(".nav-placeholder").height($("nav").outerHeight());var $navDiv=$("#navDiv"),navDivOffsetTop=$navDiv[0].offsetTop;$(document).bind("ready scroll",function(){var a=$(this).scrollTop();a>=navDivOffsetTop-10?$("nav").addClass("fixed"):$("nav").removeClass("fixed")});