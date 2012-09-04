$(function () {
    window.viewModel = new models.viewModel();
    ko.applyBindings(window.viewModel);

    $('#searchHelp').find('a').click(function () {
        window.viewModel.searchMap($(this).text());
        window.viewModel.search();
        return false;
    });

    // signalr connection

    var myHub = $.connection.defaultHub;

    setTimeout(function () {
        $.connection.hub.start();
    }, 500);

    myHub.onDataUpdated = function (data) {
        ko.mapping.fromJS(data, window.viewModel);
        utils.saveStations(ko.mapping.toJS(viewModel.stations));

        if (!window.viewModel.initialized())
            window.viewModel.initialized(true);
    };
});