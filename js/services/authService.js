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
              if ($rootScope.isDebugging)
                console.info($rootScope.user);
            });
          });

          $rootScope.$apply(function() {
            $rootScope.accessToken = response.authResponse.accessToken;
            $rootScope.isLogged = true;
          });

          if ($rootScope.isDebugging)
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

          if ($rootScope.isDebugging)
            console.info('logged out from facebook.');
        }
      });
    }

    authService.doLogin = function() {
      FB.login(function(response) {
        if ($rootScope.isDebugging)
          console.log("did log in");
      }, {scope: 'email'});
    };

    authService.doLogout = function() {
      FB.logout(function(response) {
        if ($rootScope.isDebugging)
          console.log("did log out");
      });
    };

    return authService;
  }

]);
