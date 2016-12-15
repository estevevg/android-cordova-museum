var angular = require('angular');

require('../../../core/services/apiService');

angular.module('Quest', [
	'QuestApp.quest'
])

.controller('QuestController',
    ['$scope', '$rootScope', '$state', '$mdDialog', 'QuestService',
        function ($scope, $rootScope, $state, $mdDialog, QuestService) {

					$scope.back = function() {
        		RoutingTable.transitionTo('unauthorized');
        	};

					$scope.recoverPassword = function() {
						var email = $scope.email;
						UserService.recoverPassword(email, function(err, status, response){
							if(err || status != 200){
								$mdDialog.show(
									$mdDialog.alert()
										.parent(angular.element(document.body))
										.title('Email incorrecto')
										.content('El usuario '+email+' no existe en el sistema')
										.ariaLabel('Email incorrecto')
										.ok('Ok')
									);
							} else {
								$mdDialog.show(
									$mdDialog.alert()
										.parent(angular.element(document.body))
										.title('Notificado')
										.content('Se ha enviado un correo a '+email+' para recuperar su contraseña')
										.ariaLabel('Notificado')
										.ok('Ok')
								).then(function(){
									RoutingTable.transitionTo('unauthorized');
								});
							}
						});
					};
    	}]);
