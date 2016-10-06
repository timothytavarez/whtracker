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
      .state('root', {
        url: '/',
        templateUrl: 'home/home-root.html',
        contoller: 'MappingController',
        controllerAs: 'vm'
      })
      
  }])

})(angular);