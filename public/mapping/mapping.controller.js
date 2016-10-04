(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping')
  .controller('MappingController', MappingController);
  
  MappingController.$inject = ['mapping'];
  
  function MappingController(mapping) {
    
    var vm = this;
    vm.getSolarSystems = getSolarSystems;
    vm.addMapping = addMapping;
    
    function getSolarSystems() {
      
      vm.solarSystems = mapping.getSolarSystems();
      
    }
    
    function addMapping() {
      
      vm.addMapping = mapping.addMapping();
      
    }
    
  }
  
})(angular);