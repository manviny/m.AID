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
    

    var calendarioFechaSeleccionada;

    /**
     * Devuelve las pistas de hoy + el numero de dias señalado
     * @return {[type]} [description]
     */
     var getCalendario = function (masDias){ 

        var diaSemana = moment(new Date()).add(masDias, 'days').format("DD-MM-YYYY");

        var deferred = $q.defer();
        dpd.calendarios.get( {fecha: diaSemana}, function(result) {
          calendarioFechaSeleccionada = result[0].reserva.pistas;     // guarda global el dia sleeccionado
          deferred.resolve(result[0].reserva.pistas);
        });
        return deferred.promise;
     }  
     var getCalendarioFechaSeleccionada = function (){ 
        return calendarioFechaSeleccionada;
     }     

     /**
      * Devuelve un array con los siguiente 7 dias de la semana contando desde hoy
      * @return {[type]} [description]
      */
     var getSemana = function (){ 

        var semana = [];
        var b; 

        for (var i = 0; i < 8; i++) { 
            b = moment(new Date()).add(i, 'day');
            semana.push({"date":b.format("DD-MM-YYYY"), "day":b.format("dddd")});
          }        
        return semana;
        
        // var deferred = $q.defer();
        // dpd.calendarios.get( {fecha: hoy}, function(result) { 
        //   deferred.resolve(result[0].reserva.pistas);
        // });
        // return deferred.promise;
     }

    // Public API here
    return {
      getCalendario: getCalendario,
      getSemana: getSemana,
      getCalendarioFechaSeleccionada: getCalendarioFechaSeleccionada  //devuelve el calendario del dia que se selecciono
    };

  });
