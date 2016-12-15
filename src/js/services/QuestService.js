var angular = require('angular');

angular.module('QuestApp.quest', [])

.factory('Quest', ['$rootScope', function($rootScope){

// The table contains key: resourse , value: state
  var quest = [{"img":"img/images.jsp",
                "quest": "Quin Zelda es aquest?",
                "answer": {
                  "A": "Link to the past",
                  "B": "Link's adventure",
                  "C": "Phantom hourglass"
                }},
                {"img":"img/images.jsp",
                  "quest": "Perque es important aquest joc?",
                  "answer": {
                    "A": "Perque li mola a l'Esteve",
                    "B": "Perque es un gran precedent en els action-rpg",
                    "C": "Zelda es el nom del noi"
                  }}];
  var answer = [];
  var i = 0;

  var initQuest = function() {
    answer = [];
    i = 0;
    return quest[i];
  }

  var giveAnswer = function(answer) {
    answer.push(answer);
    i+=1;
    return quest.length < i ? quest[i] : null;
  };

  var getAnswer = function() {
    return answer;
  };

  return {
    initQuest : initQuest,
    giveAnswer: giveAnswer,
    getAnswer: getAnswer
  }

}]);
