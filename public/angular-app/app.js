
angular.module('hometownApp', ['ngRoute']).config(config)

function config($routeProvider) {
    $routeProvider
        .when('/result', {
            templateUrl: 'angular-app/hometown-address/hometown-result.html',
            controller: HomeAddressController,
            controllerAs: 'vm'
        });
}

