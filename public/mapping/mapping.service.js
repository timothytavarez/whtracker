(function (angular) {
  'use strict';
  
  angular
  .module('tracker.mapping')
  .factory('mapping', mapping);
  
  mapping.$inject = ['FBURL', '$firebaseObject', '$state', '$firebaseArray'];
  
  function mapping (FBURL, $firebaseObject, $state, $firebaseArray) {
    
    var routeRef = firebase.database().ref().child("routes");
    var systemRef = firebase.database().ref().child("systems");
    
    var service = {
      
      createRoute: createRoute,
      getRoutes: getRoutes,
      getRoute: getRoute,
      updateRoute: updateRoute,
      deleteRoute: deleteRoute,
      createSystem: createSystem,
      getSystems: getSystems
      
    };
    
    return service;
    
    /////////
    
    
    function createRoute(newRoute) {
      routeRef.push({
        
//       TODO Will have to find out what new ID method is being used by the Firebase API
//        id: Firebase.ServerValue.TIMESTAMP,
        entrance: newRoute.routeEntrance,
        connection1: newRoute.routeConnection1,
        notes: newRoute.notes
      }).then(function() {
        
        $state.go('homeRoot');
        console.log('Submitted route!');
        
      }, function(error) {
        
        console.log('Failure!');
        
      })
      
    }
    
    function getRoutes() {
      
      return $firebaseArray(routeRef);
      
    }
    
    function getRoute(routeID) {
      
      var routeRef = firebase.database().ref().child("routes/" + routeID);
      
      return $firebaseObject(routeRef);
      
    }
    
    function updateRoute(route) {
      
      route.$save().then(function (success) {
        
        $state.go('homeRoot');
        
        return success;
        
      }, function (error) {
        
        console.log(error);
        
      })
      
    }
    
    function deleteRoute(route) {
      
      route.$remove().then(function (success) {
        
        console.log('Route deleted.');
        
      }, function (error) {
        
        console.log(error);
        
      })
      
    }
    
    function createSystem(system) {
      
      systemRef.push({
        name: system.name
      });
      
    }
    
    function getSystems() {
      
      return $firebaseArray(systemRef);
      
    }
    
  }
  
})(angular);