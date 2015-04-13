'use strict';

angular.module('clsrealestate', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'app/views/services.html',
        controller: 'ServicesCtrl'
      });


    $urlRouterProvider.otherwise('/');
  })
;