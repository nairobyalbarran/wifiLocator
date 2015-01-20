  var app = angular.module("demoapp", ['leaflet-directive']);

  app.controller("DemoController", [ "$scope", "$location", function($scope, $location, $http) {

  angular.extend($scope,{
      center: {
                lat: 40.4878127,
                lng: -3.6673434,
                autoDiscover: true,
                zoom: 16
              },
      markers: {
                myMarker: {
                    lat: 40.4878127,
                    lng: -3.6673434,
                    message: "Hello",
                    focus: true,
                    draggable: false
                    },
                otherMarker:{
                  lat: 40.4874738,
                  lng: -3.6637454,
                  message: "Hello",
                  focus: true,
                  draggable: false
                   }
               },
        link: function(scope, element, attrs) {
        var points = [{lat: 40.4878127, lng: -3.6673434},{lat: 40.4874738, lng: -3.6637454}];
              updatePoints(points);

              function updatePoints(pts) {
                 for (var p in pts) {
                    L.marker([pts[p].lat, pts[p].lng]).addTo(map);
                 }
              }
              scope.$watch(attr.pointsource, function(value) {
                 updatePoints(value);
              });
           }

     });

     $scope.$on("centerUrlHash", function(event, centerHash) {
                  console.log("url", centerHash);
                  $location.search({ c: centerHash });
                  console.log("entro");
        });
    $scope.pointsFromController = [{lat: 40.4878127, lng: -3.6673434},{lat: 40.4874738, lng: -3.6637454}];
     $scope.getPointsFromSomewhere = function() {
       $http.get('wifi.json').success(function(somepoints) {
       $scope.pointsFromController = somepoints;
       });
  };
  }]);