var app = angular.module("demoapp", ['leaflet-directive']);

app.controller("DemoController", ["$scope", function ($scope) {
        angular.extend($scope, {
            center: {
                lat: 51.505,
                lng: -0.09,
                zoom: 16,
                autoDiscover: true
            },
            markers: {
                lat: 51.505,
                lng: -0.09,
                zoom: 16}
        });
    }]);
