﻿/** Converts numeric degrees to radians */
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

$(function () {
    var normalizeData = function (options) {
        options.data.name = window.utils.capitalize(options.data.name);
        options.data.lat = options.data.lat / 1E6;
        options.data.lng = options.data.lng / 1E6;
        return options;
    }

    var mappings = {
        'stations': {
            key: function (data) { return ko.utils.unwrapObservable(data.id); },
            create: function (options) { return new stationModel(options); }
        }
    };

    var stationMapping = {
        'name': { update: function (options) { return window.utils.capitalize(options.data); } },
        'lat': { update: function (options) { return options.data / 1E6; } },
        'lng': { update: function (options) { return options.data / 1E6; } }
    };

    var stationModel = function (options) {
        var self = this;

        ko.mapping.fromJS(options.data, stationMapping, self);

        self.isFavorite = ko.observable(false);

        self.toggleFavorite = function () {
            self.isFavorite(!self.isFavorite());
        };

        self.getLocation = function () {
            return new google.maps.LatLng(self.lat(), self.lng());
        };
    }

    var viewPage = function (icon, key, title, onSelected) {
        var self = this;
        self.icon = ko.observable(icon);
        self.key = ko.observable(key);
        self.title = ko.observable(title);

        self.clicked = function () {
            window.viewModel.view(self);
        };

        if ($.isFunction(onSelected))
            self.onSelected = onSelected;
    };

    var searchResultModel = function (station, distance, nr) {
        var self = this;
        self.station = station;
        self.distance = Math.round(distance);
        self.nr = nr;

        self.marker = window.utils.makeMarker(station.getLocation(), station.name(), "Content/images/markers-" + nr + ".png");

        self.releaseMarker = function () {
            if (self.marker) {
                self.marker.setMap(null);
                self.marker = undefined;
            }
        }

        self.clicked = function () {
            window.map.setCenter(self.station.getLocation());
        };
    };

    var viewModel = function () {
        var self = this;

        ko.mapping.fromJS({
            stations: []
        }, mappings, self);

        self.favorites = ko.computed(function () {
            return ko.utils.arrayFilter(self.stations(), function (s) {
                return s.isFavorite();
            }).sort(window.utils.sortByName);
        });

        self.searchResults = ko.observableArray([]);
        self.searchStations = ko.observable('');
        self.searchMap = ko.observable('');
        self.locationMarker = undefined;

        self.listStations = ko.computed(function () {
            var filter = $.trim(self.searchStations()).toLowerCase();
            var result = [];
            if (filter == '') {
                result = self.stations();
            } else {
                result = ko.utils.arrayFilter(self.stations(), function (s) {
                    return s.name().toLowerCase().indexOf(filter) >= 0;
                });
            }

            return result.sort(window.utils.sortByName);
        });

        var focusSearchBox = function (ev) {
            $(ev.srcElement).prev('input').focus();
        };

        self.clearSearchStations = function (d,ev) {
            self.searchStations('');
            focusSearchBox(ev);
        };

        self.clearSearchMap = function (d,ev) {
            self.searchMap('');
            focusSearchBox(ev);
        };

        self.views = ko.observableArray([
            new viewPage('icon-star', 'favorites', 'Favoriter'),
            new viewPage('icon-list', 'stations', 'Stationer'),
            new viewPage('icon-map-marker', 'find', 'Hitta station', window.utils.initMap),
            new viewPage('icon-question-sign', 'about', 'Om')
        ]);

        self.view = ko.observable(self.views()[0]);

        self.view.subscribe(function () {
            if ($.isFunction(self.view().onSelected)) {
                self.view().onSelected();
            }
        });

        self.clearSearchResults = function () {
            if (self.locationMarker)
                self.locationMarker.setMap(null);

            if (self.searchResults().length > 0) {
                ko.utils.arrayForEach(self.searchResults(), function (r) {
                    r.releaseMarker();
                });

                self.searchResults.removeAll();
            }
        };

        self.search = function () {
            self.clearSearchResults();

            if (self.searchMap() == '')
                return;

            var address = self.searchMap();
            if (address.toLowerCase().indexOf("göteborg") < 0)
                address = address + ", Göteborg";

            window.utils.codeAddress(address, function (results) {
                if (results.length == 0)
                    return;

                self.showAt(results[0].geometry.location);
            });
        };

        self.showAt = function (searchLoc) {
            var distances = ko.utils.arrayMap(self.stations(), function (p) {
                return { distance: google.maps.geometry.spherical.computeDistanceBetween(searchLoc, p.getLocation()), station: p };
            });

            distances.sort(function (o1, o2) { return o1.distance - o2.distance; });

            var nr = 0;
            self.searchResults(ko.utils.arrayMap(distances.slice(0, 5), function (o) {
                nr++;
                return new searchResultModel(o.station, o.distance, nr);
            }));

            self.locationMarker = window.utils.makeMarker(searchLoc, "Sökresultat för: " + self.searchMap(), "Content/images/markers-location.png");

            window.utils.fitMap(ko.utils.arrayMap(self.searchResults(), function (r) {
                return r.station.getLocation();
            }));
        };
    };

    window.viewModel = new viewModel();
    ko.applyBindings(window.viewModel);

    var getData = function (callback) {
        $.getJSON('http://api.citybik.es/goteborg.json?callback=?', function (data) {
            ko.mapping.fromJS({ stations: data }, window.viewModel);
            if ($.isFunction(callback))
                callback();
        });
    };

    var poll = function () {
        getData(function () {
            setTimeout(poll, 60 * 1000);
        });
    }

    getData(function () {
        window.utils.setFavorites();

        window.viewModel.favorites.subscribe(function (val) {
            window.utils.saveFavorites(val);
        });

        setTimeout(poll, 60 * 1000);
    });

    $('#searchHelp').find('a').click(function () {
        window.viewModel.searchMap($(this).text());
        window.viewModel.search();
        return false;
    });
});