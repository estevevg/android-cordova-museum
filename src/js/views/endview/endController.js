var angular = require('angular');

//Modules definitio
require('./ng-cordova');
require('ui-router');
require('./views/nfc/nfcController');
require('./core/services/routingTable');
require('./core/services/localStorage');


/*angular.module('Authentication', []);
angular.module('Tickets', []);
angular.module('settings', []);*/

var moved = false;

angular.module('TickDiBasic', [
    require('angular-material'),
    'ngCordova',
    'ui.router',
    'NFC',
    'NetBillBasic.routing',
    'NetBillBasic.storage'
])

.factory('authInterceptor', ['$rootScope', '$q', 'Storage',
  function ($rootScope, $q, Storage) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($rootScope.sessionId) {
          config.headers.Authorization = 'Bearer ' + $rootScope.sessionId;
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          console.log('Not authorized, session expired');
          Storage.removeKey('sessionId');
          $rootScope.sessionId = null;
          //$state.transitionTo('unauthorized');
        }
        return response || $q.when(response);
      }
    };
}])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider

        .state('intro',{
            url:'/intro',
            templateUrl: 'js/views/nfc/nfcView.html'
        });

        $httpProvider.interceptors.push('authInterceptor');

        //Color palette

        // Extend the red theme with a few different colors
        var neonRedMap = $mdThemingProvider.extendPalette('red', {
          '500': 'ff5c2c',
          'A500' : 'eeeeee'
        });
        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('neonRed', neonRedMap);
        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default')
          .primaryPalette('neonRed')

}])

.run(['$rootScope', '$state', '$location', 'RoutingTable',
    function ($rootScope, $state, $location, RoutingTable) {

        /*if(!$rootScope.sessionId){
            $state.transitionTo('unauthorized');
        } else {
            $state.transitionTo('home');
        }*/

       /*$rootScope.$on('$stateChangeStart', function (event, toState, toParams){
            console.log(event);
            console.log(toState);
            console.log(toParams);
        });*/

        $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {

          console.log('Old location '+oldLocation+' new Location '+newLocation);
          console.log('Transition? '+$rootScope.transaction);
          console.log('Getting in? '+(!$rootScope.transaction));
          if(!$rootScope.transaction) {
            var movedTo = RoutingTable.getTable()[oldLocation];
            console.log('Transaction '+movedTo);
            $rootScope.transaction = true;
            $state.transitionTo(movedTo);
          } else {
            console.log('Normal transaction');
            moved = false;
            $rootScope.transaction = false;
          }

           /*if($rootScope.back){
            $state.transitionTo($rootScope.back);
          }*/

        });

    }]);
