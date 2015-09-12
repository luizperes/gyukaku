angular.module('GKManagerApp')
  .controller('userCtrl', ['$scope', '$rootScope', '$location', 'userService',

    function($scope, $rootScope, $location, userService)
    {
      $scope.userServiceData = {};

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

      $scope.save = function() {
        userService.save();
      };

      $scope.redirectToMain = function(){
        $location.path('/').replace();
      };
    }

]);
