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

  	
  	$scope.horarios = [];

	var page = myNavigator.getCurrentPage();
	$scope.titulo = page.options.pista;
	$scope.planHorario = _.find(cal.getCalendarioFechaSeleccionada(), { 'title': $scope.titulo }).horario;


	angular.forEach($scope.planHorario, function(hora) {
		hora.h.length == 0 ? $scope.horarios.push({hora: hora.t, libre: true}) : $scope.horarios.push({hora: hora.t, libre: false});	
	});

  });
