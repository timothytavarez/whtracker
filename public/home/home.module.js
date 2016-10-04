(function (angular) {
  'use strict';
                     
  angular
  .module('tracker.home', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
      
      $stateProvider
      .state('homeRoot', {
        url: '/home',
        templateUrl: 'home/home-root.html',
        controller: 'MappingController',
        controllerAs: 'vm'
      })
      
  }])

})(angular);