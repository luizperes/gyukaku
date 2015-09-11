angular.module('GKManagerApp')
  .controller('userCtrl', ['$scope', 'userService',

    function( $scope, userService)
    {

      $scope.save = function() {
        userService.save();
      };

    }

]);
