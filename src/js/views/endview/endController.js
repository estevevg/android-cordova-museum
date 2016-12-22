var angular = require('angular');
require('../../services/questService');

angular.module('End', [
  'QuestApp.quest'
])

.controller('EndController',
    ['$scope', '$rootScope', '$state', '$mdDialog', 'QuestService',
        function ($scope, $rootScope, $state, $mdDialog, QuestService) {

					var answer = QuestService.getAnswer();
          var solution = QuestService.getSolution();

          i=0;
          score=0;
          for(a in answer){
            score+= a == solution[i] ? 1 : 0;
          }

          $scope.score = score;

          $scope.restart = function() {
            console.log('Starting a new questionare');
            $rootScope.currentQuest = QuestService.initQuest();
            $state.transitionTo('quest');
          }

        }]);
