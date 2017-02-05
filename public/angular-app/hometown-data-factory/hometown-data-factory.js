angular.module('hometownApp', ['ngRoute']).factory('hometownDataFactory', hometownDataFactory)
// var distance = require('google-distance');
// distance.apiKey = 'AIzaSyApkz70mOPgeqHRLPL8qJ5inJwtjrzXgw4';



function hometownDataFactory($http) {
    return {
        distanceBetweenCities: distanceBetweenCities
    }

    //API call for distance calculation with Google Maps API
    function distanceBetweenCities(hometown, currentCity) {
        $http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyApkz70mOPgeqHRLPL8qJ5inJwtjrzXgw4').then(complete).catch(failed)
    }


    //Success calback
    function complete(response) {
        return response;
    }

    //Error Callback
    function failed(error) {
        console.log(error.statusText)
    }

}