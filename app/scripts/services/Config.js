'use strict';

angular.module('blogApp')
  .factory('Config', function($http, $rootScope) {
    return{
      make: function(){
        this.getConfigFile(function(data){
          $rootScope.config = data[0];
        });
      },
      getConfigFile: function(callback){
        $http.get('config.json').success(callback);
      }
    }
  });
