angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', ])
  // 'tableSort'
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
  $scope.userForm = {};
  $scope.allUserRecords = function() {
    NavigationService.userViewAllSubmit($scope.userForm, function(data) {
      $scope.userdata = data.data;
      console.log('user data', data.data);
    });
  };

  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user data', data.data);
  });


  $scope.deleteUser = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteUserData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allUserRecords();
      }

    });
  };



})

.controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("Create User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.header = {
    name: 'Create User'
  };
  //console.log($scope.userForm);
  $scope.userSubmitForm = function(formValid) {
      $state.go("user");
    if (formValid.$valid)
    {
      $scope.formComplete = true;

    }

    NavigationService.userCreateSubmit($scope.userForm, function(data) {
  console.log('userform', $scope.userForm);
    });

  };

})

.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userdetail");
  $scope.menutitle = NavigationService.makeactive("Edit User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit User'
  };
  NavigationService.getUserEditDetail($stateParams.id, function(data) {
    console.log(data);
    $scope.userForm = data.data;
  });

  $scope.userSubmitForm = function(formValid) {
    console.log($scope.userForm);
    $state.go("user");
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.editUserSubmit($scope.userForm, function(data) {
        console.log('response:', data);
      });

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

.controller('CreateUserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("usernotificationdetail");
  $scope.menutitle = NavigationService.makeactive("Create Notification");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create - User Notification'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $state.go("usernotification");
      $scope.formComplete = true;

    } else {

    }

  };

})

.controller('EditUserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("usernotificationdetail");
  $scope.menutitle = NavigationService.makeactive("Edit Notification");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit - User Notification'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $state.go("usernotification");
      $scope.formComplete = true;

    } else {

    }

  };

})


.controller('UserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplan");
  $scope.menutitle = NavigationService.makeactive("User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('CreateUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplandetail");
  $scope.menutitle = NavigationService.makeactive("Create User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create - User Plan'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log($scope.userForm);
    if (formValid.$valid)
     {
      $state.go("userplan");
      $scope.formComplete = true;

    } else {

    }

  };


})

.controller('EditUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplandetail");
  $scope.menutitle = NavigationService.makeactive("Edit User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit - User Plan'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $state.go("userplan");
      $scope.formComplete = true;

    } else {

    }

  };

})

.controller('PlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("plan");
  $scope.menutitle = NavigationService.makeactive("Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.allTableRecords = function() {
    NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
      $scope.plandata = data.data;
      console.log('plan data', data.data);
    });
  };

  NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
    $scope.plandata = data.data;
    console.log('plan data', data.data);
  });


  $scope.deletePlan = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteFormData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allTableRecords();
      }

    });
  };

  // $scope.editPlan = function(formValid) {
  //   $state.go("edit-plan");
  //   console.log('formvalid', formValid);
  //   NavigationService.editFormData(formValid, function(data) {
  //     console.log('editFormData:', data);
  //     $.jStorage.set('plans', data.data);
  //     // if (data.value === true) {
  //     //
  //     //   $scope.allTableRecords();
  //     // }
  //     if (data.value === true) {
  //       $scope.allTableRecords();
  //     }
  //   });
  // };



})

.controller('CreatePlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("plandetail");
  $scope.menutitle = NavigationService.makeactive("Create Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.header = {
    name: 'Create Plan'
  };
  $scope.submitForm = function(formValid) {
    $state.go("plan");
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;


    }
    NavigationService.createPlanSubmit($scope.userForm, function(data) {

      console.log('userform', $scope.userForm);


    });

  };

})

.controller('EditPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("plandetail");
  $scope.menutitle = NavigationService.makeactive("Edit Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Plan'
  };

  NavigationService.getPlanDetail($stateParams.id, function(data) {
    console.log(data);
    $scope.userForm = data.data;
  });

  $scope.submitForm = function(formValid) {

    console.log('user form:', $scope.userForm);
    $state.go("plan");
    console.log('on the plan');
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.editPlanSubmit($scope.userForm, function(data) {
        console.log('response:', data);
      });
    }
  };
})

.controller('SuggestCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestion");
  $scope.menutitle = NavigationService.makeactive("Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('CreateSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestiondetail");
  $scope.menutitle = NavigationService.makeactive("Create Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Suggestion'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formCoplete = true;
      $state.go("suggestion");
    }

  };
})

.controller('EditSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestiondetail");
  $scope.menutitle = NavigationService.makeactive("Edit Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Suggestion'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formCoplete = true;
      $state.go("suggestion");
    }

  };
})

.controller('TemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templates");
  $scope.menutitle = NavigationService.makeactive("Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('CreateTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templatesdetail");
  $scope.menutitle = NavigationService.makeactive("Create Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Templates'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      $state.go("templates");
    }
  };

})

.controller('EditTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templatesdetail");
  $scope.menutitle = NavigationService.makeactive("Edit Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Templates'
  };
  $scope.userForm = {};
  $scope.submitForm = function(formData, formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      $state.go("templates");
    }
  };
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  // $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  //   $(window).scrollTop(0);
  // });
});
