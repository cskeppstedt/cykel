window.models = {
    mappings: {
        'stations': {
            key: function (data) { return ko.utils.unwrapObservable(data.id); },
            create: function (options) { return new models.stationModel(options); }
        }
    },

    stationModel: function (options) {
        var self = this;

        ko.mapping.fromJS(options.data, {
            'include': ['isFavorite']
        }, self);

        if (self.isFavorite === undefined)
            self.isFavorite = ko.observable(false);

        self.toggleFavorite = function () {
            self.isFavorite(!self.isFavorite());
        };

        self.getLocation = function () {
            return new google.maps.LatLng(self.lat(), self.lng());
        };
    },

    viewPage: function (icon, key, title, options) {
        var settings = $.extend({
            onSelected: function () { },
            isVisible: ko.observable(true)
        }, options);

        var self = this;
        self.icon = ko.observable(icon);
        self.key = ko.observable(key);
        self.title = ko.observable(title);

        self.clicked = function () {
            window.viewModel.view(self);
        };

        self.onSelected = settings.onSelected;
        self.isVisible = settings.isVisible;
    },

    searchResultModel: function (station, distance, nr) {
        var self = this;
        self.station = station;
        self.distance = Math.round(distance);
        self.nr = nr;

        var url = "http://d1ym5253oqhv2q.cloudfront.net/Content/images/markers-" + nr + ".png";
        self.marker = window.utils.makeMarker(station.getLocation(), station.name(), url);

        self.releaseMarker = function () {
            if (self.marker) {
                self.marker.setMap(null);
                self.marker = undefined;
            }
        }

        self.clicked = function () {
            window.map.setCenter(self.station.getLocation());
        };
    },

    viewModel: function () {
        var self = this;

        ko.mapping.fromJS({
            stations: utils.loadStations()
        }, models.mappings, self);

        self.searchResults = ko.observableArray([]);
        self.searchStations = ko.observable('');
        self.searchMap = ko.observable('');
        self.locationMarker = undefined;
        self.initialized = ko.observable(false);

        self.favorites = ko.computed(function () {
            return ko.utils.arrayFilter(self.stations(), function (s) {
                return s.isFavorite();
            }).sort(window.utils.sortByName);
        });

        self.favorites.subscribe(function () {
            utils.saveStations(ko.mapping.toJS(viewModel.stations));
        });

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

        self.clearSearchStations = function (d, ev) {
            self.searchStations('');
            focusSearchBox(ev);
        };

        self.clearSearchMap = function (d, ev) {
            self.searchMap('');
            focusSearchBox(ev);
        };

        self.views = ko.observableArray([
            new models.viewPage('icon-star', 'favorites', 'Favoriter', { isVisible: ko.computed(function () { return self.favorites().length > 0; }) }),
            new models.viewPage('icon-list', 'stations', 'Stationer'),
            new models.viewPage('icon-map-marker', 'find', 'Hitta station', { onSelected: window.utils.initMap }),
            new models.viewPage('icon-question-sign', 'about', 'Om')
        ]);

        self.view = ko.observable(ko.utils.arrayFirst(self.views(), function(v) { return v.isVisible(); }));

        self.view.subscribe(function () {
            self.view().onSelected();
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
                return new models.searchResultModel(o.station, o.distance, nr);
            }));

            self.locationMarker = window.utils.makeMarker(searchLoc, "Sökresultat för: " + self.searchMap(), "Content/images/markers-location.png");

            window.utils.fitMap(ko.utils.arrayMap(self.searchResults(), function (r) {
                return r.station.getLocation();
            }));
        };

        self.isFollowing = ko.observable(false);
        self.toggleFollow = function () {
            self.isFollowing(!self.isFollowing());
        };
    }
};