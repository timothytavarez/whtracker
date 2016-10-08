(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping')
  .controller('MappingController', MappingController);
  
  MappingController.$inject = ['mapping', '$firebaseObject', '$firebaseArray', '$stateParams', '$state', 'ngToast'];
  
  function MappingController(mapping, $firebaseObject, $firebaseArray, $stateParams, $state, ngToast) {
    
    var vm = this;
    vm.createRoute = createRoute;
    vm.getRoutes = getRoutes();
    vm.getRoute = getRoute;
    vm.updateRoute = updateRoute;
    vm.deleteRoute = deleteRoute;
    vm.createSystem = createSystem;
    vm.getSystems = getSystems();
    
    function createRoute(newRoute) {
      
      mapping.createRoute(newRoute);
      
    }
    
    function getRoutes() {
      
      vm.routes = mapping.getRoutes();
      
      var routes = vm.routes;
      
    }
    
    function getRoute() {
      
      var routeID = $stateParams.routeID;
      
      vm.route = mapping.getRoute(routeID);
      
      console.log(vm.route);
      
    }
    
    function updateRoute() {
      
      var route = vm.route;
      
      mapping.updateRoute(route);
      
    }
    
//   TODO function deleteRoute() will need to be delegated to the mapping service for consistency sake.
    
    function deleteRoute() {
      
      var route = vm.route;
      
      route.$remove()
      .then(function (success) {
        
        $state.go('homeRoot');
        
//        TODO additional testing on toast creation.
//        ngToast.create('A test toast');
        
      }, function(error) {
        
        console.log(error);
        
      })
      
    }
    
    function createSystem(system) {
      
      mapping.createSystem(system);
      
    }
    
    function getSystems() {
      
      vm.systems = mapping.getSystems();
      
      var systems = vm.systems;
      
    }
    
    
  }
  
})(angular);