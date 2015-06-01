'use strict';

/**
 * @ngdoc overview
 * @name photoBoothApp
 * @description
 * # photoBoothApp
 *
 * Main module of the application.
 */
angular
  .module('photoBoothApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'webcam'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/capture', {
        templateUrl: 'views/capture.html',
        controller: 'MainCtrl'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'MainCtrl'
      })
  });
