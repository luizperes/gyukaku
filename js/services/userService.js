angular.module('GKManagerApp')

.factory('userService', ['$http', '$rootScope',

  function($http, $rootScope) {

    return {
        // get all the comments
        get : function() {
            console.log(addressPublicFolder + '/users/' + $rootScope.accessToken);
            return $http.get(addressPublicFolder + '/users/' + $rootScope.accessToken).
            then(function(response){
              if ($rootScope.isDebugging)
                console.info(response);
              return response;
            });
        },

        // save a comment (pass in comment data)
        save : function() {
            console.log(addressPublicFolder + '/users');
            return $http.post(addressPublicFolder + '/users',
                    {"fb_access_token" : $rootScope.accessToken, "id_role" : "2", 'id_location' : '1'}).
                    then(function(response) {
                      // this callback will be called asynchronously
                      // when the response is available
                      if ($rootScope.isDebugging)
                        console.info(response);
                    }, function(response) {
                      // called asynchronously if an error occurs
                      // or server returns response with an error status.
                    });
        }
    }

  }
]);
