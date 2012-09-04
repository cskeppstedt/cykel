/** Converts numeric degrees to radians */
if (typeof Number.prototype.toRad == 'undefined') {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

/** Converts radians to numeric (signed) degrees */
if (typeof Number.prototype.toDeg == 'undefined') {
    Number.prototype.toDeg = function () {
        return this * 180 / Math.PI;
    }
}

window.utils = (function () {
    var storageKeys = {
        favorites: "cykel.chsk.se.favoriteIds",
        stations: "cykel.chsk.se.stations"
    };

    var _geocoder = new google.maps.Geocoder();

    var fixMapSize = function () {
        var $map_canvas = $('#map_canvas');
        var height = window.innerHeight - $map_canvas.position().top - 20;
        if (height < 20)
            height = 20;

        $map_canvas.height(height);

        if (window.map)
            google.maps.event.trigger(window.map, 'resize');
    };

    $(window).resize(fixMapSize);
    $(fixMapSize);

    return {
        getLocation: function (callback) {
            if (Modernizr.geolocation)
                navigator.geolocation.getCurrentPosition(callback);
            else
                alert("Your browser don't support geolocation");
        },

        codeAddress: function (address, onComplete, onFail) {
            _geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && $.isFunction(onComplete))
                    onComplete(results);
                else if ($.isFunction(onFail))
                    onFail(results, status);
            });
        },

        initMap: function () {
            if (window.map) {
                setTimeout(fixMapSize, 10);
                return;
            }

            var myOptions = {
                zoom: 16,
                center: new google.maps.LatLng(57704263 / 1E6, 11972077 / 1E6),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
            };

            window.centerPos = myOptions.center;
            window.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            /*
            var fitAllPoints = true;

            if (Modernizr.geolocation) {
                window.utils.getLocation(function (geoPosition) {
                    var loc = new google.maps.LatLng(geoPosition.coords.latitude, geoPosition.coords.longitude);

                    _geocoder.geocode({ location: loc }, function (result, status) {
                        if (status == google.maps.GeocoderStatus.OK && result && result.length > 0 && result[0].formatted_address) {
                            fitAllPoints = false;
                            window.viewModel.searchMap(result[0].formatted_address);
                            window.viewModel.showAt(result[0].geometry.location);
                        }
                    });
                });
            }

            if (fitAllPoints) {
                window.utils.fitMap(ko.utils.arrayMap(window.viewModel.stations(), function (s) {
                    return new google.maps.LatLng(s.lat(), s.lng())
                }));
            }*/
        },

        getStationById: function (id) {
            return ko.utils.arrayFirst(window.viewModel.stations(), function (s) {
                return s.id() == id;
            });
        },

        fitMap: function (positions) {
            if (positions.length == 0)
                return;

            var bounds = new google.maps.LatLngBounds();

            ko.utils.arrayForEach(positions, function (p) {
                if (p.lat() > 0 && p.lng() > 0)
                    bounds.extend(p);
            });

            window.map.fitBounds(bounds);
        },

        makeMarker: function (location, title, markerImageUrl, clickCallback) {
            if (markerImageUrl)
                var icon = new google.maps.MarkerImage(markerImageUrl, null, null, null, new google.maps.Size(20, 35));

            var marker = new google.maps.Marker({
                position: location,
                title: title,
                map: window.map,
                icon: icon
            });

            if ($.isFunction(clickCallback))
                google.maps.event.addListener(marker, 'click', clickCallback);

            return marker;
        },

        sortByName: function (a, b) {
            return a.name().toLowerCase() < b.name().toLowerCase() ? -1 : 1;
        },

        saveFavoritesIds: function (ids) {
            if (!Modernizr.localstorage)
                return false;
            
            var value = JSON.stringify(ids);
            window.localStorage[storageKeys.favorites] = value;
            return true;
        },

        loadFavoritesIds: function () {
            if (Modernizr.localstorage) {
                var value = window.localStorage[storageKeys.favorites];
                if (value)
                    return JSON.parse(value) || [];
            }

            return [];
        },

        saveStations: function (stations) {
            if (!Modernizr.localstorage)
                return;

            var value = JSON.stringify(stations);
            window.localStorage[storageKeys.stations] = value;
        },

        loadStations: function () {
            if (Modernizr.localstorage) {
                var value = window.localStorage[storageKeys.stations];
                if (value)
                    return JSON.parse(value) || [];
            }

            return [];
        },

        log: function () {
            if (console && console.log)
                console.log('Log: ', arguments);
        }
    }
})();