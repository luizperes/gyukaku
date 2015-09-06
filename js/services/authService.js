angular.module('GKManagerApp')
  .factory("authService", ['$rootScope',

  function($rootScope) {
    var authService = {};

    authService.fblogin = function() {
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          // You can now do what you want with the data fb gave you.
          console.info(response);
        }
      });
    }

    authService.watchLoginChange = function() {
      var _self = this;
      FB.Event.subscribe('auth.authResponseChange', function(res) {
        if (res.status === 'connected') {
          FB.api('/me', function(res) {
            $rootScope.$apply(function() {
              $rootScope.user = _self.user = res;
              authService.fblogin();
              console.info($rootScope.user);
            });
          });
        } else {
          console.info('logged out from facebook.');
          authService.logout();
        }
      });
    }

    authService.logout = function() {
      var _self = this;
      FB.getLoginStatus(function(response) {
        if (response && response.status !== 'connected')
        {
                $rootScope.$apply(function() {
                  $rootScope.user = _self.user = {};
                });
                console.info($rootScope.user);
        }
      });
    }

    return authService;
  }

]);
