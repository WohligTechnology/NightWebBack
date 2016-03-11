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
        url: "/edituser/:id",
        templateUrl: "views/template.html",
        controller: 'EditUserCtrl'
      })

      .state('usernotification', {
        url: "/usernotification",
        templateUrl: "views/template.html",
        controller: 'UserNotificationCtrl'
      })

      .state('create-user-notification', {
        url: "/create-user-notification",
        templateUrl: "views/template.html",
        controller: 'CreateUserNotificationCtrl'
      })

      .state('edit-user-notification', {
        url: "/edit-user-notification",
        templateUrl: "views/template.html",
        controller: 'EditUserNotificationCtrl'
      })

      .state('userplan', {
        url: "/userplan",
        templateUrl: "views/template.html",
        controller: 'UserPlanCtrl'
      })

      .state('create-userplan', {
        url: "/create-userplan",
        templateUrl: "views/template.html",
        controller: 'CreateUserPlanCtrl'
      })

      .state('edit-userplan', {
        url: "/edit-userplan/:id",
        templateUrl: "views/template.html",
        controller: 'EditUserPlanCtrl'
      })

      .state('plan', {
        url: "/plan",
        templateUrl: "views/template.html",
        controller: 'PlanCtrl'
      })

      .state('create-plan', {
        url: "/create-plan",
        templateUrl: "views/template.html",
        controller: 'CreatePlanCtrl'
      })

      .state('edit-plan', {
        url: "/edit-plan/:id",
        templateUrl: "views/template.html",
        controller: 'EditPlanCtrl'
      })

      .state('suggestion', {
        url: "/suggestion",
        templateUrl: "views/template.html",
        controller: 'SuggestCtrl'
      })

      .state('create-suggest', {
        url: "/create-suggest",
        templateUrl: "views/template.html",
        controller: 'CreateSuggestCtrl'
      })

      .state('edit-suggest', {
        url: "/edit-suggest/:id",
        templateUrl: "views/template.html",
        controller: 'EditSuggestCtrl'
      })

      .state('templates', {
        url: "/templates",
        templateUrl: "views/template.html",
        controller: 'TemplatesCtrl'
      })

      .state('create-templates', {
        url: "/create-templates",
        templateUrl: "views/template.html",
        controller: 'CreateTemplatesCtrl'
      })

      .state('edit-templates', {
        url: "/edit-templates/:id",
        templateUrl: "views/template.html",
        controller: 'EditTemplatesCtrl'
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "views/template.html",
        controller: 'BlogCtrl'
      })

      .state('create-blog', {
        url: "/create-blog",
        templateUrl: "views/template.html",
        controller: 'CreateBlogCtrl'
      })

      .state('edit-blog', {
        url: "/edit-blog/:id",
        templateUrl: "views/template.html",
        controller: 'EditBlogCtrl'
      })

      .state('documentationcategory', {
        url: "/documentationcategory",
        templateUrl: "views/template.html",
        controller: 'DocumentationCategoryCtrl'
      })

      .state('create-documentationcategory', {
        url: "/create-documentationcategory",
        templateUrl: "views/template.html",
        controller: 'CreateDocumentationCategoryCtrl'
      })

      .state('edit-documentationcategory', {
        url: "/edit-documentationcategory/:id",
        templateUrl: "views/template.html",
        controller: 'EditDocumentationCategoryCtrl'
      })

      .state('documentation', {
        url: "/documentation",
        templateUrl: "views/template.html",
        controller: 'DocumentationCtrl'
      })

      .state('create-documentation', {
        url: "/create-documentation",
        templateUrl: "views/template.html",
        controller: 'CreateDocumentationCtrl'
      })

      .state('edit-documentation', {
        url: "/edit-documentation/:id",
        templateUrl: "views/template.html",
        controller: 'EditDocumentationCtrl'
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

firstapp.directive('uiFileUpload', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
        var $element = $(element);
      $element.bootstrapFileInput();
    }
  };
});
firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      // console.log('serverimage: ', input);
      // return input;
      return imgpath + input;
      // return "http://192.168.0.123/eurobackend/uploads"+input;
    } else {
      return "img/logo.png";
    }
  };
});
