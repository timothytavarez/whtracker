(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {
    
    $stateProvider
    .state('mappingRoot', {
      url: 'mapping',
      templateUrl: 'mapping/mapping-root.html',
      controller: 'MappingController',
      controllerAs: 'vm'
    })
    
  }])
  
})(angular);