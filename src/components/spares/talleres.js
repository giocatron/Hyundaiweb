
    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#999"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    var locations = [
                    ['Casa Central', -25.2706107, -57.6053073, 'm_1'],
                                ['Taller Ciudad del Este', -25.505859, -54.6448802, 'm_3'],
                    ['Santa Rita', -25.7691667, -55.0687372, 'm_4'],
                    ['Encarnación', -27.3094722, -55.8418054, 'm_5'],
                    ['Cnel. Oviedo', -25.4447823, -56.4393854, 'm_6'],
                    ['Departamento de Repuestos', -25.2717139, -57.605117, 'm_7'],
                    ['Taller autorizado LC Cars', -24.6720367, -56.4461071, 'm_8'],
                    ['Taller autorizado Cristian Paats &amp; Cia', -25.4447823, -56.4393854, 'm_9'],
                    ['Taller autorizado Autocentro San Roque', -25.4604701, -56.0069811, 'm_10'],
                    ['Taller autorizado Rectificadora Campo 9', -25.3779436, -55.7085371, 'm_11'],
                    ['Taller autorizado JuanK Encarnación', -27.3094722, -55.8418054, 'm_12'],
                    ['Taller autorizado Industrial Chaco', -22.357106, -60.0337708, 'm_13'],
                    ['Taller autorizado Autocenter', -22.3845982, -59.835856, 'm_14'],
                    ['Taller autorizado Braun S.R.L.', -22.6465638, -60.1228818, 'm_15'],
                    ['Taller autorizado JuanK Hohenau', -27.070111111111, -55.645972222222, 'm_16'],
                    ['Taller autorizado Gorostiaga CDE', -25.5091657, -54.6351241, 'm_17'],
                    ['Taller autorizado Premium', -24.9727077, -54.9186158, 'm_18'],
                    ['Taller autorizado Bazzo', -25.8027238, -55.0954699, 'm_19'],
                    ['Taller autorizado Taller GT', -27.3483344, -55.8658996, 'm_20'],
                    ['Taller autorizado Taller San Carlos', -23.40728, -57.44382, 'm_21'],
                    ['Taller autorizado Gorostiaga Santa Rita', -25.7691667, -55.0687372, 'm_22'],
                    ['Taller autorizado Motor Mec', -26.8556666, -58.2988295, 'm_24'],
                    ['Taller autorizado Motormack', -22.396074, -59.837147, 'm_25'],
                    ['Norte Autos', -22.561197, -55.723115, 'm_26'],
                    ['Ciudad del Este', -25.505859, -54.6448802, 'm_27'],
                    ['Autidiesel Paraná', -24.2478, -54.76368, 'm_28'],
                    ['LubriMor Servicios &amp; Repuestos', -26.85926, -57.03484, 'm_29'],
                    ['Taller Fogasa', -23.803298, -56.503879, 'm_30'],
                    ['Taller RG', -25.805955, -56.431192, 'm_31'],
            ];

    $(function() {

        var latitude;
        var longitude;
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var myLatlng = new google.maps.LatLng(-25.29894, -57.55309);

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            styles: styles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            center: myLatlng
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i, markers = [];

        var bounds = new google.maps.LatLngBounds();

        function setMarkers(locations) {
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    // icon: locations[i][1],
                    id: locations[i][3]
                });

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                markers.push(marker);

                google.maps.event.addListener(marker, 'click', function () {
                    map.panTo(this.getPosition());
                });
                bounds.extend(marker.position);
            }
        }

        setMarkers(locations);
        map.setCenter(new google.maps.LatLng(locations[0][1], locations[0][2]));
        map.setZoom(15);

        $('.marker').on('click', function() {
            for(i = 0; i < markers.length; i++) {
                if(markers[i].id == $(this).attr('data-id')) {
                    google.maps.event.trigger(markers[i], 'click');
                    $('html, body').animate({
                        scrollTop: $('#map').offset().top
                    }, 500);
                }
            }
            return false;
        });

        $('.selector a').on('click', function() {
            var href = $(this).attr('href');
            if(!$(href).is(':visible')) {
                $('.selector a').removeClass('active');
                $('.tab').hide();
                $(this).addClass('active');
                $(href).fadeIn();
            }
            return false;
        });
    });
