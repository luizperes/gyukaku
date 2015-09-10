angular.module('GKManagerApp')
  .controller('authCtrl', ['$scope', 'authService',

    function( $scope, authService)
    {
      $scope.authServiceData = {};

      $scope.doLogin = function() {
        authService.doLogin();
      };

      $scope.doLogout = function(id) {
        authService.doLogout();
      };

    }

]);
