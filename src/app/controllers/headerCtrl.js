'use strict';

angular.module('clsrealestate')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.date = new Date();

    $scope.isActive = function(path) {
      return path === $location.path();
    };

  });