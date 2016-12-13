var angular = require('angular');

angular.module('QuestApp.quest', [])

.factory('Quest', ['$rootScope', function($rootScope){

// The table contains key: resourse , value: state
  var table = {
    '/intro' : 'intro',
    '/login' : 'menu.products',
    '/register': 'unauthorized',
    '/home': 'menu.home',
    '/ticket' : 'menu.home',
    '/userSettings': 'menu.home',
    '/repair': 'ticket',
    '/ticketData': 'ticket',
    '/qrcode': 'menu.home',
    '/products': 'menu.products',
    '/return': 'ticket',
    '/warranty': 'ticket',
    '/nfc': 'menu.home',
    '/productDesc': 'menu.products',
    '/imageData': 'imageTicket',
    '/imageTicket': 'menu.home',
    '/recovery': 'unauthorized'
  };

  var initQuest = function() {
    return table;
  }

  var transitionTo = function(state) {
    $rootScope.transaction = true;
    $state.transitionTo(state);
  }

  /**
  * Transition and sets the back route
  */
  var transitionToBack = function(state, back) {
    $rootScope.transaction = true;
    $rootScope.back = back;
    $state.transitionTo(state);
  }

  /**
  * Goes back to the transition setted
  */
  var transitionBack = function() {
    if($rootScope.back){
      var back = $rootScope.back;
      $rootScope.back = null;
      $state.transitionTo(back);
    } else {
      console.log('No back is defined');
    }
  }

  var transitionToReload = function(state) {
    $rootScope.transaction = true;
    $state.transitionTo(state, null, {'reload':true});
  }

  return {
    getTable : getTable,
    transitionTo: transitionTo,
    transitionToReload: transitionToReload,
    transitionToBack: transitionToBack,
    transitionBack: transitionBack
  }

}]);
