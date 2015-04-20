'use strict';

angular.module('clsrealestate').directive('foot', function() {
  return{
    restrict: 'E',
    templateUrl: 'app/views/footer.html',
    controller: 'FooterCtrl'
  };
});