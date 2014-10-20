'use strict';

/**
 * @ngdoc function
 * @name mcalendarioAppApp.controller:DiasemanaCtrl
 * @description
 * # DiasemanaCtrl
 * Controller of the mcalendarioAppApp
 */
angular.module('mcalendarioAppApp')
  .controller('DiasemanaCtrl', function ($scope, cal) {
 
  	
  	$scope.dias = cal.getSemana();
console.debug("pistas", $scope.dias);
  });
