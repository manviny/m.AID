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
    
moment.lang('es', {
  months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
  monthsShort: 'ene._feb._mar._abr._may_jun_jul._ago_sept._oct._nov._dic.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'dom._lun._mar._mie._jue._vie._sa.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY LT',
    LLLL: 'dddd D MMMM YYYY LT'
  },
  calendar: {
    sameDay: '[Aujourdhui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'une année',
    yy: '%d années'
  },
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : 'ème');
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
});

moment.lang('es');

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
