angular.module('GKManagerApp')
  .controller('authCtrl', ['authService', '$scope',

      function(authService, $scope) {
        $scope.logout = function()
        {
          authService.logout();
        }
        $scope.fblogin = function()
        {
          authService.fblogin();
        }
    }

]);
