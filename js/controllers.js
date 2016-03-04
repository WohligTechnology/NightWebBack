angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("Users");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("Create User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm={};
  $scope.header={name:'Create User'};
  //console.log($scope.userForm);
  $scope.submitForm=function(formData,formValid){
  //console.log('user form:',$scope.userForm);
  console.log('form data:',formData);
  if(formValid.$valid)
  {
    $state.go("user");
    $scope.formComplete=true;

  }
  else{

  }

  };

})

.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("Edit User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header={name:'Edit User'};
  $scope.submitForm=function(formData,formValid){
  console.log($scope.userForm);
  if(formValid.$valid)
  {
      $state.go("user");
    $scope.formComplete=true;

  }
  else{

  }

  };
})

.controller('UserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("usernotification");
  $scope.menutitle = NavigationService.makeactive("User Notification");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('UserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplan");
  $scope.menutitle = NavigationService.makeactive("User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('PlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("plan");
  $scope.menutitle = NavigationService.makeactive("Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('SuggestCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestion");
  $scope.menutitle = NavigationService.makeactive("Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('TemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templates");
  $scope.menutitle = NavigationService.makeactive("Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})
;
