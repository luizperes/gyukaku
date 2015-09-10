angular.module('GKManagerApp')
  .controller('authCtrl', ['$scope', 'testService',

    function( $scope, testService) {
      // object to hold all the data for the new  form
      $scope.testServiceData = {};

      // loading variable to show the spinning loading icon
      $scope.loading = true;

      // get all the testServices first and bind it to the $scope.testServices object
      // use the function we created in our service
      // GET ALL testServiceS ==============
      testService.get()
          .success(function(data) {
              $scope.testServiceData = data;
              $scope.loading = false;
          });

      // function to handle submitting the form
      // SAVE A testService ================
      $scope.submittestService = function() {
          $scope.loading = true;

          // save the testService. pass in testService data from the form
          // use the function we created in our service
          testService.save($scope.testServiceData)
              .success(function(data) {

                  // if successful, we'll need to refresh the testService list
                  testService.get()
                      .success(function(getData) {
                          $scope.testServiceData = getData;
                          $scope.loading = false;
                      });

              })
              .error(function(data) {
                  console.log(data);
              });
      };

      // function to handle deleting a testService
      // DELETE A testService ====================================================
      $scope.deletetestService = function(id) {
          $scope.loading = true;

          // use the function we created in our service
          testService.destroy(id)
              .success(function(data) {

                  // if successful, we'll need to refresh the testService list
                  testService.get()
                      .success(function(getData) {
                          $scope.testServiceData = getData;
                          $scope.loading = false;
                      });

              });
      };

    }

]);
