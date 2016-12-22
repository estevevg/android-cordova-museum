var angular = require('angular');
require('../../services/questService');

angular.module('QuestIT', [
  'QuestApp.quest'
])

.controller('QuestController',
    ['$scope', '$rootScope', '$state', '$mdDialog', 'QuestService',
        function ($scope, $rootScope, $state, $mdDialog, QuestService) {

					$scope.quest = $rootScope.currentQuest;

          $scope.next = function(){
						console.log('Selecting solution');
						var answer = $scope.answer;
						if(!answer) {
							alert("Selecciona una resposta");
						} else {
							console.log(answer);
							quest = QuestService.giveAnswer(answer);
							if(!quest) {
							 console.log("End of quest");
							 $state.transitionTo("end");
						 } else {
								console.log(quest);
								$rootScope.currentQuest=quest;
								$state.reload();
							}
						}
          };

        }]);
