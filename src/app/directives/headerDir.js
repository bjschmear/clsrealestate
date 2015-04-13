'use strict';

angular.module('clsrealestate').directive('navbar', function() {
  return{
    restrict: 'E',
    templateUrl: 'app/views/navbar.html',
    controller: 'HeaderCtrl'
  };
});