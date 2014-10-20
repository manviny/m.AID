'use strict';

/**
 * @ngdoc overview
 * @name mcalendarioAppApp
 * @description
 * # mcalendarioAppApp
 *
 * Main module of the application.
 */
angular
  .module('mcalendarioAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'onsen.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pistas', {
        templateUrl: 'views/pistas.html',
        controller: 'PistasCtrl'
      })
      .when('/pistas', {
        templateUrl: 'views/pistas.html',
        controller: 'PistasCtrl'
      })
      .when('/diasemana', {
        templateUrl: 'views/diasemana.html',
        controller: 'DiasemanaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
