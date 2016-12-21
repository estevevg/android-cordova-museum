var angular = require('angular');

//Modules definitio
require('./ng-cordova');
require('ui-router');
require('./views/introview/introController');


/*angular.module('Authentication', []);
angular.module('Tickets', []);
angular.module('settings', []);*/

var moved = false;

angular.module('QuestBasic', [
    require('angular-material'),
    'ngCordova',
    'ui.router',
    'Intro'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
        .state('intro',{
            url:'/intro',
            templateUrl: 'js/views/nfc/nfcView.html'
        });


}])

.run(['$rootScope', '$state', '$location',
    function ($rootScope, $state, $location) {

        });

}]);
