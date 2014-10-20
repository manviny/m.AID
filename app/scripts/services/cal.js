'use strict';

/**
 * @ngdoc service
 * @name mcalendarioAppApp.cal
 * @description
 * # cal
 * Factory in the mcalendarioAppApp.
 */
angular.module('mcalendarioAppApp')
  .factory('cal', function ($q, $rootScope, $http, $filter) {
    
    /**
     * Devuelve las pistas de hoy + el numero de dias señalado
     * @return {[type]} [description]
     */
     var getCalendario = function (masDias){ 

        var hoy = moment(new Date()).format("DD-MM-YYYY");      // fecha de hoy
        
        var deferred = $q.defer();
        dpd.calendarios.get( {fecha: hoy}, function(result) { 
          deferred.resolve(result[0].reserva.pistas);
        });
        return deferred.promise;
     }     

     /**
      * Devuelve un array con los siguiente 7 dias de la semana contando desde hoy
      * @return {[type]} [description]
      */
     var getSemana = function (){ 

        var hoy = moment(new Date()).format("DD-MM-YYYY");      // fecha de hoy
        
        var deferred = $q.defer();
        dpd.calendarios.get( {fecha: hoy}, function(result) { 
          deferred.resolve(result[0].reserva.pistas);
        });
        return deferred.promise;
     }

    // Public API here
    return {
      getCalendario: getCalendario,
      getSemana: getSemana
    };

  });
