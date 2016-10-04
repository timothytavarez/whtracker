(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping')
  .factory('mapping', mapping);
  
  mapping.$inject = [];
  
  function mapping () {
    
    var service = {
      
      getSolarSystems: getSolarSystems,
//      getConstellations: getConstellations,
//      getRegions: getRegions
      
    };
    
    return service;
    
    /////////
    
    function getSolarSystems() {
      
      var systems = [
        {
        name: 'RPS-0K',
        status: false
        },
        {
        name: 'Poitot',
        status: true
        }
        
      ]
      
      return systems;
      
    }
    
  }
  
})(angular);