'use strict';

angular.module('tracker', [
  
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngTouch',
  'firebase',
  'angular-loading-bar',
  'ngToast',
  
  'tracker.config',
  'tracker.home',
  'tracker.mapping'
  
])

.run(['$rootScope', '$log', '$state', 
    function($rootScope, $log, $state) {
    
    	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			    
			    // Everything below is purely for assistance in debugging
			    // states and state errors.

				$log.debug('Successfully changed states');
				
				$log.debug('event', event);
				$log.debug('toState', toState);
				$log.debug('toParams', toParams);
				$log.debug('fromState', fromState);
				$log.debug('fromParams', fromParams);
			});
			
			$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
				
				$log.error('Requested state was not found: ', unfoundState);
			});
			
			$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
				
				$log.error('An error occurred while changing states: ', error);
				
				$log.debug('event', event);
				$log.debug('toState', toState);
				$log.debug('toParams', toParams);
				$log.debug('fromState', fromState);
				$log.debug('fromParams', fromParams);
			});
    
  }]);
