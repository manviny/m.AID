'use strict';

/**
 * @ngdoc function
 * @name mcalendarioAppApp.controller:PistasCtrl
 * @description
 * # PistasCtrl
 * Controller of the mcalendarioAppApp
 */
angular.module('mcalendarioAppApp')
  .controller('PistasCtrl', function ($scope, cal) {

  	cal.getCalendario(myNavigator.getCurrentPage().options.masDias)
  	.then(function(response){
  		$scope.pistas = [];

		angular.forEach(response, function(pista) {
		  console.debug('pista',pista.title);
		  		var libre = 0;
		  		angular.forEach(pista.horario, function(horario) {
		  			if(_.isEmpty(horario.h)) {libre++}
				});
				console.debug("libre",libre);
				$scope.pistas.push({title: pista.title, libres: libre})
		});

  	})

  	$scope.goHorario = function(index){
  		myNavigator.pushPage('views/horarios.html', { pista: $scope.pistas[index].title })
  	}  

  });
