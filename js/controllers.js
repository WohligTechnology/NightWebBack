angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('userNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

}).controller('userPlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

}).controller('planCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

}).controller('suggestCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

}).controller('templateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('createUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
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
