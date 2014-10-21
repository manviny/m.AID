'use strict';

/**
 * @ngdoc function
 * @name mcalendarioAppApp.controller:HorariosCtrl
 * @description
 * # HorariosCtrl
 * Controller of the mcalendarioAppApp
 */
angular.module('mcalendarioAppApp')
  .controller('HorariosCtrl', function ($scope, cal) {

  	
  	

	var page = myNavigator.getCurrentPage();
	$scope.titulo = page.options.pista;
	$scope.horarios = _.find(cal.getCalendarioFechaSeleccionada(), { 'title': $scope.titulo }).horario;

	console.log($scope.horarios);


  });
