angular.module('GKManagerApp')
  .controller('userCtrl', ['$scope', '$rootScope', '$location', 'userService',

    function($scope, $rootScope, $location, userService)
    {
      $scope.userServiceData = {};
      $scope.id_location = 1;
      $scope.id_role = 2;

      $rootScope.$watch('isLogged', function() {
        if ($rootScope.isLogged)
        {
          userService.get().then(function(d) {
            $scope.userServiceData = d.data.user;
          });
        }
        else
        {
          $scope.userServiceData = {};
        }
      });

      $scope.get = function() {
        userService.get().then(function(d) {
          $scope.userServiceData = d.data.user;
        });
      };

      $scope.save = function(id_location, id_role) {
        userService.save(id_location, id_role).then(function(d){
          if(d.data.success)
          {
            $scope.get();
          }
        });
      };

      $scope.redirectToMain = function(){
        $location.path('/').replace();
      };
    }

]);
