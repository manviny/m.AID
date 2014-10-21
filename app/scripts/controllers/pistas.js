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
  		$scope.pistas = response;
  	})

  	$scope.goHorario = function(index){
  		myNavigator.pushPage('views/horarios.html', { pista: $scope.pistas[index].title })
  	}  

  });
