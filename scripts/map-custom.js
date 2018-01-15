//Script to make a map and set appropriate locations
function initMap() {
    "use strict";
    var map, myIcon, strContent, infowindow = new google.maps.InfoWindow({maxWidth: 260}), marker, i, $cMap = $('#map');
    
    if ($cMap.hasClass('milk')) {
        //iw content
        strContent = [
            ['<div id="iw-container">' +
                '<div class="iw-title">A cafe or retailer</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.900783, 147.320266, 5],
            ['<div id="iw-container">' +
                '<div class="iw-title">A 2nd cafe or retailer</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris exercitation ullamco laboris exercitation ullamco laboris exercitation ullamco laboris exercitation ullamco laboris exercitation ullamco laboris labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.834017, 147.271965, 4],
            ['<div id="iw-container">' +
                '<div class="iw-title">A 3rd cafe or retailer</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.859021, 147.304806, 3],
            ['<div id="iw-container">' +
                '<div class="iw-title">A 4th cafe or retailer</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.909501, 147.344572, 2],
            ['<div id="iw-container">' +
                '<div class="iw-title">A 5th cafe or retailer</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.841087, 147.30197, 1]
        ];
        myIcon = 'images/icons/black_marker.png';
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: new google.maps.LatLng(-42.84, 147.32),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    } else {
        strContent = [ ['<div id="iw-container">' +
                '<div class="iw-title">56 Gormanston Road</div>' +
                '<div class="iw-content">' +
                    '<div class="iw-subTitle">Sub heading</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
            '</div>', -42.8424975, 147.2974353, 1] ];
        myIcon = 'images/icons/map_icon.png';
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: new google.maps.LatLng(-42.84, 147.32),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }
    
    function createMarker(i, strContent, myIcon, map) {
        //Create this marker
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(strContent[i][1], strContent[i][2]),
            icon: myIcon,
            map: map
        });
        
        //Open this iw when this marker is clicked
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function () {
                infowindow.open(map, marker);
                infowindow.setContent(strContent[i][0]);  
            };
        })(marker, i));
        
        //Close iw when click on map
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });
        
        //Open this iw on load
        if ($cMap.hasClass('factory')) {
            map.addListener('mouseover', function() {
                infowindow.open(map, marker);
                infowindow.setContent(strContent[i][0]);
            });
        }
    }
    for (i = 0; i < strContent.length; i++) {
        createMarker(i, strContent, myIcon, map, marker);
    }
    
    // *
    // START INFOWINDOW CUSTOMIZE.
    // The google.maps.event.addListener() event expects
    // the creation of the infowindow HTML structure 'domready'
    // and before the opening of the infowindow, defined styles are applied.
    // *
    google.maps.event.addListener(infowindow, 'domready', function() {
        // Reference to the DIV that wraps the bottom of infowindow
        var iwOuter = $('.gm-style-iw');

        /* Since this div is in a position prior to .gm-div style-iw.
         * We use jQuery and create a iwBackground variable,
         * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
        */
        var iwBackground = iwOuter.prev();

        // Removes background shadow DIV
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});

        // Removes white background DIV
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        
        // Reference to the div that groups the close button elements.
        var iwCloseBtn = iwOuter.next();
        // Apply the desired effect to the close button
        iwCloseBtn.css({opacity: '1', right: '1px', top: '15px', border: '7px solid #ffd000', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
    });
}
//google.maps.event.addDomListener(window, 'load', initialize);