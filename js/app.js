// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, toastrConfig) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    angular.extend(toastrConfig, {
        autoDismiss: true,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body',
        timeOut: 5000,
        progressBar: true
    });

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

firstapp.directive('capitalizeFirst', function($parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            var capitalize = function(inputValue) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                var capitalized = inputValue.charAt(0).toUpperCase() + inputValue.substring(1);
                //var capitalized = inputValue.toUpperCase();
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            };
            modelCtrl.$parsers.push(capitalize);
            capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
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
firstapp.directive('uploadImage', function($http) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel'
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            if (attrs.multiple || attrs.multiple === "") {
                console.log("Its Multiple");
                $scope.isMultiple = true;

                $("#inputImage").attr("multiple", "ADD");
            }

            $scope.clearOld = function() {
                $scope.model = [];
            };

            $scope.upload = function(image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(adminurl + 'upload', formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.isMultiple) {
                        $scope.model.push(data.data[0]);

                    } else {
                        $scope.model = data.data[0];
                    }

                });

            };

        }
    };
});

firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});
firstapp.filter('serverimage', function() {
    return function(input) {
        if (input) {
            return "http://api.thetmm.org/uploadfile/resize?file=" + input;
        } else {
            return "img/logo.png";
        }
    };
});
