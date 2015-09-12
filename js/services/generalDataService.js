angular.module('GKManagerApp')

.factory('generalDataService', ['$http', '$rootScope',

  function($http, $rootScope) {

    return {
        // get all the comments
        get : function() {
            if ($rootScope.isDebugging)
              console.log(addressPublicFolder + '/generalData');
            return $http.get(addressPublicFolder + '/generalData').
            then(function(response){
              if ($rootScope.isDebugging)
                console.info(response);
              return response;
            });
        }
      }
    }
]);
