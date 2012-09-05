$(function () {
    window.viewModel = new models.viewModel();
    ko.applyBindings(window.viewModel);

    if (Modernizr.applicationcache) {
        window.applicationCache.addEventListener('updateready', function (e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                window.applicationCache.swapCache();
                window.viewModel.updateReady(true);
            }
        }, false);

        window.applicationCache.addEventListener('cached', function (e) {
            window.location.reload();
        }, false);

    }

    $('#searchHelp').find('a').click(function () {
        window.viewModel.searchMap($(this).text());
        window.viewModel.search();
        return false;
    });

    // signalr connection

    setTimeout(function () {
        $.connection.hub.logging = true;
        var myHub = $.connection.defaultHub;

        $.connection.hub.start(function () {
            utils.log('Connection to signalr established');
        });
        
        myHub.onDataUpdated = function (data) {
            utils.log('New data recieved');

            ko.mapping.fromJS(data, window.viewModel);
            utils.saveStations(ko.mapping.toJS(viewModel.stations));

            if (!window.viewModel.initialized()) {
                utils.log('Initializing model');
                window.viewModel.initialized(true);
            }
        };

    }, 500);
});