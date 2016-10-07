(function(angular) {
  'use strict';
  
  angular
  .module('tracker.config', [])
  
  .constant('FBURL', 'https://tracker-5d6e4.firebaseio.com/')

  .constant('version', '0.1')

  .config(['$urlRouterProvider', function ($urlRouterProvider) {
  
      $urlRouterProvider.otherwise('/');
  
  }])
  
})(angular);