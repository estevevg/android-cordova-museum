var angular = require('angular');

angular.module('QuestApp.quest', [])

.factory('QuestService', ['$rootScope', function($rootScope){

// The table contains key: resourse , value: state
  var quest = [{"img":"images.jpg",
                "quest": "Quin Zelda es aquest?",
                "answer": [
                  {"key": "A", "text": "Link to the past"},
                  {"key": "B", "text": "Link's adventure"},
                  {"key": "C", "text": "Phantom hourglass"}
                ]},
                {"img":"images.jsp",
                  "quest": "Perque es important aquest joc?",
                  "answer": [
                    {"key": "A", "text": "Perque li mola a l'Esteve"},
                    {"key": "B", "text": "Perque es un gran precedent en els action-rpg"},
                    {"key": "C", "text": "Zelda es el nom del noi"}
                  ]}];
  var solution = ["A", "B"];
  var answer = [];
  var i = 0;

  var initQuest = function() {
    answer = [];
    i = 0;
    return quest[i];
  }

  var giveAnswer = function(ans) {
    answer.push(ans);
    i+=1;
    return i < quest.length ? quest[i] : null;
  };

  var getAnswer = function() {
    return answer;
  };

  var getSolution = function() {
    return solution;
  };

  return {
    initQuest : initQuest,
    giveAnswer: giveAnswer,
    getAnswer: getAnswer,
    getSolution: getSolution
  }

}]);
