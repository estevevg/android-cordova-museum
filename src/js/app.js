var angular = require('angular');

//Modules definitio
require('./ng-cordova');
require('ui-router');
require('./views/introview/introController');
require('./views/questview/questController');
require('./views/endview/endController');


/*angular.module('Authentication', []);
angular.module('Tickets', []);
angular.module('settings', []);*/

angular.module('QuestBasic', [
    require('angular-material'),
    'ngCordova',
    'ui.router',
    'Intro',
    'QuestIT',
    'End'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
        .state('intro',{
            url:'/intro',
            templateUrl: 'js/views/introview/introView.html'
        })
        .state('quest',{
            url:'/quest',
            templateUrl: 'js/views/questview/questView.html'
        })
        .state('end',{
            url:'/end',
            templateUrl: 'js/views/endview/endView.html'
        });


}])

.run(['$rootScope', '$state', '$location',
    function ($rootScope, $state, $location) {

}]);
