angular.module('hometownApp', ['ngRoute']).controller('HomeAddressController', HomeAddressController)

function HomeAddressController($route, hometownDataFactory) {
    var vm = this;
    vm.isSubmitted = false;
    console.log("In HomeAddressController")
    vm.getDistanceAPI = function (address) {
        var hometown = vm.home_town;
        //   var currentCity = vm.currentCity;
        var currentCity = "Maryville,MO"

        if (vm.hometownForm.$valid) {
            hotelDataFactory.distanceBetweenCities(hometown, currentCity).then(function (response) {
                if (response.status == 200) {
                    console.log(response)
                    vm.distance = response.distance
                }
            }).catch(function (error) {
                console.log(error)
            })

        }
        else {
            vm.isSubmitted = true;
            console.log("Form is Invalid")
        }
    }
}