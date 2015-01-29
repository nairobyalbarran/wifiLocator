var app = angular.module("demoapp", ['leaflet-directive']);

  app.controller("GeoJSONController", ['$scope', '$http','leafletData',function($scope, $http, leafletData) {
   angular.extend($scope,{
    tiles: {
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          },
      center: {
                    lat: 40.488585,
                    lng: -3.669471,
                    autoDiscover: true,
                    zoom: 16

                },
                markers: {
                        lat: 40.488585,
                        lng: -3.669471,
                        focus: true,
                        message: "Hey, drag me if you want",
                        title: "Marker",
                        draggable: true
                }
    });

    $scope.centerJSON = function() {
            leafletData.getMap().then(function(map) {
                var latlngs = [];
                for (var i in $scope.geojson.data.features[0].geometry.coordinates) {
                    var coord = $scope.geojson.data.features[0].geometry.coordinates[i];
                    console.log(coord);
                        for (var j in coord){
                             var points = coord[j];
                            //console.log(points); 
                    }
                 latlngs.push(L.GeoJSON.coordsToLatLng(coord));
              }
                map.fitBounds(latlngs);
            });
        };


        // Get the wifi data from a JSON
        $http.get("js/json/wifis.json").success(function(data, status) {
          console.log("entro en datos");
            angular.extend($scope, {
                geojson: {
                    data: data,
                    style: {
                        fillColor: "black",
                        radius: 10,
                        weight: 10,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7
                    }
                }
            });
        });
  }]);