GKManagerApp.run(['$rootScope', '$window', 'authService', function($rootScope, $window, authService) {

    $rootScope.user = {};
    $rootScope.isLogged = false;
    $rootScope.accessToken = "";

    $window.fbAsyncInit = function() {
      FB.init({
        appId: '1601772643423569',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.3'
      });
      authService.watchLoginChange();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }
  ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/views/index-partial.html'
      });
  }

]);
