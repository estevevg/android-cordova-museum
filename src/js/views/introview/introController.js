var angular = require('angular');
require('../../services/questService');

angular.module('Intro', [
  'QuestApp.quest'
])

.controller('IntroController',
    ['$scope', '$rootScope', '$state', '$mdDialog', 'QuestService',
        function ($scope, $rootScope, $state, $mdDialog, QuestService) {

          $scope.start = function(){
            console.log('Starting a new questionare');
            $rootScope.currentQuest = QuestService.initQuest();
            $state.transitionTo('quest');
          };

        }]);
