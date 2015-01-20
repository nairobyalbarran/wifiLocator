// Ionic Starter App

var app = angular.module("demoapp", ['leaflet-directive']);

app.controller("DemoController", [ "$scope", "$location", function($scope, $location) {

   //here's the property you can just update.
  /* $scope.pointsFromController = [{lat: 40.4878127, lng: -3.6673434},{lat: 40.4874738, lng: -3.6637454}];

   //here's some contrived controller method to demo updating the property.
   $scope.getPointsFromSomewhere = function() {
     $http.get('http://miquelcamps.cartodb.com/api/v2/sql?q=SELECT * FROM public.wifis_p_blicas_de_madrid').success(function(somepoints) {
         $scope.pointsFromController = somepoints;
     });
   }*/
// Nothing here!
angular.extend($scope, {

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
           }
   });

   $scope.$on("centerUrlHash", function(event, centerHash) {
                console.log("url", centerHash);
                $location.search({ c: centerHash });
            });
}]);




           

/*function MapCtrl($scope, $http) {
   //here's the property you can just update.
   $scope.pointsFromController = [{lat: 40, lng: -86},{lat: 40.1, lng: -86.2}];

   //here's some contrived controller method to demo updating the property.
   $scope.getPointsFromSomewhere = function() {
     $http.get('http://miquelcamps.cartodb.com/api/v2/sql?q=SELECT * FROM public.wifis_p_blicas_de_madrid').success(function(somepoints) {
         $scope.pointsFromController = somepoints;
     });
   }
}*/

/*$scope.markers = new Array();

            $scope.$on("leafletDirectiveMap.click", function(event, args){
                var leafEvent = args.leafletEvent;

                $scope.markers.push({
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: "My Added Marker"
                });
            });*/
 //       } ]);
