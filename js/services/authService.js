angular.module('GKManagerApp')
  .factory("authService", ['$rootScope',

  function($rootScope) {
    var authService = {};

    authService.fblogin = function() {
      var _self = this;
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          FB.api('/me', {fields: "id,name,picture,email"}, function(res) {
            $rootScope.$apply(function() {
              $rootScope.user = _self.user = res;
              console.info($rootScope.user);
            });
          });

          $rootScope.$apply(function() {
            $rootScope.accessToken = response.authResponse.accessToken;
            $rootScope.isLogged = true;
          });

          console.info(response);
        }
      });
    }

    authService.watchLoginChange = function() {
      var _self = this;
      FB.Event.subscribe('auth.authResponseChange', function(res) {
        if (res.status === 'connected')
        {
          authService.fblogin();
        } else {
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
            $rootScope.accessToken = "";
            $rootScope.isLogged = false;
          });

          console.info('logged out from facebook.');
        }
      });
    }

    return authService;
  }

]);
