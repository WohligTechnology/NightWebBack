// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "views/template-login.html",
      controller: 'LoginCtrl'
    })

  .state('user', {
    url: "/user",
    templateUrl: "views/template.html",
    controller: 'UserCtrl'
  })

  .state('createuser', {
    url: "/createuser",
    templateUrl: "views/template.html",
    controller: 'CreateUserCtrl'
  })

  .state('edituser', {
    url: "/edituser",
    templateUrl: "views/template.html",
    controller: 'EditUserCtrl'
  })

  .state('usernotification', {
    url: "/usernotification",
    templateUrl: "views/template.html",
    controller: 'UserNotificationCtrl'
  })

  .state('userplan', {
    url: "/userplan",
    templateUrl: "views/template.html",
    controller: 'UserPlanCtrl'
  })

  .state('plan', {
    url: "/plan",
    templateUrl: "views/template.html",
    controller: 'PlanCtrl'
  })

  .state('suggestion', {
    url: "/suggestion",
    templateUrl: "views/template.html",
    controller: 'SuggestCtrl'
  })

  .state('templates', {
    url: "/templates",
    templateUrl: "views/template.html",
    controller: 'TemplatesCtrl'
  });

  $urlRouterProvider.otherwise("/user");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});

firstapp.directive('toggleOffCanvas', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      $element.click(function() {
        console.log('Clicked');
        $('body').toggleClass('on-canvas');
      });
    }
  };
});
