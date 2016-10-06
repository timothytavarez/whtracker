(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping')
  .controller('MappingController', MappingController);
  
  MappingController.$inject = ['mapping', '$firebaseObject', '$firebaseArray', '$stateParams', '$state'];
  
  function MappingController(mapping, $firebaseObject, $firebaseArray, $stateParams, $state) {
    
    var vm = this;
    vm.createRoute = createRoute;
    vm.getRoutes = getRoutes();
    vm.getRoute = getRoute;
    vm.updateRoute = updateRoute;
    vm.deleteRoute = deleteRoute;
    
    function createRoute(newRoute) {
      
      mapping.createRoute(newRoute);
      
    }
    
    function getRoutes() {
      
      vm.routes = mapping.getRoutes();
      console.log('Route retrieval initialized.')
      console.log(vm.routes);
      
      var routes = vm.routes;
      
    }
    
    function getRoute() {
      
      var routeID = $stateParams.routeID;
      
      vm.route = mapping.getRoute(routeID);
      
      console.log(vm.route);
      
    }
    
    function updateRoute() {
      
      var route = vm.route;
      console.log('Attempting update');
      
      mapping.updateRoute(route);
      
    }
    
//   TODO function deleteRoute() will need to be delegated to the mapping service for consistency sake.
    
    function deleteRoute() {
      
      var route = vm.route;
      
      route.$remove()
      .then(function (success) {
        
        console.log('Deleting item...');
        $state.go('homeRoot');
        
      }, function(error) {
        
        console.log(error);
        
      })
      
    }
    
    
  }
  
})(angular);