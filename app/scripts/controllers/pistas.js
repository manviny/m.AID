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

  	cal.getCalendario()
  	.then(function(response){
  		$scope.pistas = response;
  	    console.log(response);
  	})

  	console.debug("pistas", cal.getSemana())

  });
