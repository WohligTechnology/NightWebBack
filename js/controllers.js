angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.select2', 'imageupload'])

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("login");
  $scope.menutitle = NavigationService.makeactive("Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("Users");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.thead = ['#', 'Name', 'Email', 'Action'];
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';
  $scope.pagedata.sort = "name";
  $scope.pagedata.sortnum = 1;
  $scope.form = {image:"chintan"};
  $scope.search = function() {
    NavigationService.searchUser($scope.pagedata, function(data) {
      console.log(data);
      $scope.userdata = data.data;
      $scope.totalItems = data.data.total;
    });
  };

  $scope.search();


  $scope.allUserRecords = function() {
    // NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    //     $scope.userdata = data.data;
    //     console.log('user data', data.data);
    //
    // });
    $scope.search();
  };

  // NavigationService.userViewAllSubmit($scope.userForm, function(data) {
  //     $scope.userdata = data.data;
  //     console.log('user data', data.data);
  // });


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
  //$scope.formvalid={};

  $scope.userSubmitForm = function(formValid) {
    if (formValid.$valid) {
      NavigationService.userCreateSubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
        $state.go("user");
      });

    }
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
    console.log('getUserEditDetail', data);
    $scope.userForm = data.data;
  });

  $scope.userSubmitForm = function(formValid) {
    console.log($scope.userForm);

    console.log('on the user');
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.editUserSubmit($scope.userForm, function(data) {
        console.log('response:', data);
        $state.go("user");
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
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';
  $scope.pagedata.sort = "creationtime";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchUserNotification($scope.pagedata, function(data) {
      console.log(data);
      $scope.usernotificationdata = data.data;
      $scope.totalItems = data.data.total;
    });
  };

  $scope.search();

  $scope.allUserNotificationRecords = function() {
    // NavigationService.userNotificationViewAllSubmit($scope.userForm, function(data) {
    //     $scope.usernotificationdata = data.data;
    //     console.log('user data', data.data);
    // });
    $scope.search();
  };

  // NavigationService.userNotificationViewAllSubmit($scope.userForm, function(data) {
  //     $scope.usernotificationdata = data.data;
  //     console.log('user data', data.data);
  // });


  $scope.deleteUserNotification = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteUserNotificationData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allUserNotificationRecords();
      }

    });
  };

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
  $scope.userNotificationSubmitForm = function(formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $state.go("usernotification");
      $scope.formComplete = true;
      NavigationService.userNotificationCreateSubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
      });
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
  NavigationService.getUserNotificationEditDetail($stateParams.id, function(data) {
    console.log('getUserEditDetail', data);
    $scope.userForm = data.data;
  });


  $scope.userNotificationSubmitForm = function(formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.editUserNotificationSubmit($scope.userForm, function(data) {
        console.log('response:', data);
        $state.go("usernotification");
      });
    }

  };


})


.controller('UserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplan");
  $scope.menutitle = NavigationService.makeactive("User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "foldername";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchUserplan($scope.pagedata, function(data) {
      $scope.userplandata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();

  $scope.allUserPlanRecords = function() {
    // NavigationService.userPlanViewAllSubmit($scope.userForm, function(data) {
    //     $scope.userplandata = data.data;
    //     console.log('view all userplan data', data.data);
    // });
    $scope.search();
  };

  // NavigationService.userPlanViewAllSubmit($scope.userForm, function(data) {
  //     $scope.userplandata = data.data;
  //     console.log('view alllll userplan data', data.data);
  // });
  $scope.deleteUserPlan = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteUserPlanData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {
        $scope.allUserPlanRecords();
      }
    });
  };
})

.controller('CreateUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplandetail");
  $scope.menutitle = NavigationService.makeactive("Create User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.header = {
    name: 'Create - User Plan'
  };

  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user viewall for user', data.data);
  });

  NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
    $scope.plandata = data.data;
    console.log('plan viewall for plan', data.data);
  });





  $scope.userPlanSubmitForm = function(formValid) {

    //console.log($scope.userForm);
    if (formValid.$valid) {
      NavigationService.userPlanCreateSubmit($scope.userForm, function(data) {
        console.log('userplanform', $scope.userForm);
      });
      $state.go("userplan");

    }

  };
})

.controller('EditUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("userplandetail");
  $scope.menutitle = NavigationService.makeactive("Edit User Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit - User Plan'
  };
  NavigationService.getUserPlanEditDetail($stateParams.id, function(data) {
    console.log('on edit plan');
    console.log('getPlanDetail', data);
    $scope.userForm = data.data;
    $scope.userForm.starttime = new Date($scope.userForm.starttime);
    $scope.userForm.endtime = new Date($scope.userForm.endtime);
    // if ($scope.userForm.user) {
    //     $scope.userForm.user = $scope.userForm.user._id;
    // }
    // if ($scope.userForm.plan) {
    //     $scope.userForm.plan = $scope.userForm.plan._id;
    // }
  });
  $scope.userPlanSubmitForm = function(formValid) {
    console.log($scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
    }
    // $scope.userForm.starttime = new Date($scope.userForm.starttime);
    // $scope.userForm.endtime = new Date($scope.userForm.endtime);
    NavigationService.editUserPlanSubmit($scope.userForm, function(data) {
      console.log('response:', data);
      $state.go("userplan");
    });

  };
  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user viewall for user', data.data);
  });

  NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
    $scope.plandata = data.data;
    console.log('plan viewall for plan', data.data);
  });

})


.controller('PlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("plan");
  $scope.menutitle = NavigationService.makeactive("Plan");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "name";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchPlan($scope.pagedata, function(data) {
      $scope.plandata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });
  };
  $scope.search();

  $scope.allTableRecords = function() {
    // NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
    //     $scope.plandata = data.data;
    //     console.log('plan data', data.data);
    //     console.log('plan name', data.data.name);
    // });
    $scope.search();
  };

  // NavigationService.viewAllPlanSubmit($scope.userForm, function(data) {
  //     $scope.plandata = data.data;
  //     console.log('plan data', data.data);
  // });


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
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      NavigationService.createPlanSubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
      });
      $state.go("plan");
    }
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
    console.log('on edit plan');
    console.log('getPlanDetail', data);
    $scope.userForm = data.data;
  });

  $scope.submitForm = function(formValid) {

    console.log('user form:', $scope.userForm);

    console.log('on the plan');
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.editPlanSubmit($scope.userForm, function(data) {
        console.log('response:', data);
        $state.go("plan");
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
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "name";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchSuggestion($scope.pagedata, function(data) {
      $scope.sugestdata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();

  // NavigationService.viewAllSuggestionSubmit($scope.userForm, function(data) {
  //     $scope.sugestdata = data;
  //     console.log('suggest data', data.data);
  // });

  $scope.allSuggestionRecords = function() {
    // NavigationService.viewAllSuggestionSubmit($scope.userForm, function(data) {
    //     $scope.sugestdata = data.data;
    //     //console.log('suggest data', data.data);
    // });
    $scope.search();
  };

  $scope.deleteSuggestion = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteSuggestionData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allSuggestionRecords();
      }

    });
  };
})

.controller('CreateSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestiondetail");
  $scope.menutitle = NavigationService.makeactive("Create Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.header = {
    name: 'Create Suggestion'
  };
  $scope.suggestionSubmitForm = function(formValid) {

    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      NavigationService.createSuggestionSubmit($scope.userForm, function(data) {
        console.log('suggestform', $scope.userForm);
        $state.go("suggestion");
      });
    }

  };
  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user viewall for user', data.data);
  });
})

.controller('EditSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("suggestiondetail");
  $scope.menutitle = NavigationService.makeactive("Edit Suggestion");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Suggestion'
  };
  //$scope.userForm = {};
  NavigationService.getSuggestionDetail($stateParams.id, function(data) {
    console.log('on suggest plan');
    console.log('getSuggestionDetail', data);
    $scope.userForm = data.data;
  });



  $scope.suggestionSubmitForm = function(formValid) {
    $state.go("suggestion");
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;


    }
    NavigationService.editSuggestionSubmit($scope.userForm, function(data) {
      console.log('response:', data);
    });
  };

  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user viewall for user', data.data);
  });
})

.controller('TemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templates");
  $scope.menutitle = NavigationService.makeactive("Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "name";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchTemplate($scope.pagedata, function(data) {
      $scope.templatesdata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();



  $scope.allTemplatesRecords = function() {
    // NavigationService.templatesViewAllSubmit($scope.userForm, function(data) {
    //     $scope.templatesdata = data.data;
    //     console.log('templates data', data.data);
    // });
    $scope.search();
  };

  // NavigationService.templatesViewAllSubmit($scope.userForm, function(data) {
  //     $scope.templatesdata = data.data;
  //     console.log('templates data', data.data);
  // });

  $scope.deleteTemplates = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteTemplatesData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allTemplatesRecords();
      }

    });
  };


})

.controller('CreateTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $location) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templatesdetail");
  $scope.menutitle = NavigationService.makeactive("Create Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Templates'
  };
  $scope.userForm = {};
  $scope.userForm.images = [];
  $scope.userForm = {};
  $scope.userForm.images = [];
  $scope.templatesSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    //  if (formValid.$valid) {
    NavigationService.templatesCreateSubmit($scope.userForm, function(data) {
      console.log('suggestform', $scope.userForm);
      $state.go("templates");
    });

    //}
  };
  $scope.removeimagecerti = function() {
    $scope.userForm.image = '';
  };
  $scope.onFileSelect = function($files, whichone, uploadtype) {
    globalfunction.onFileSelect($files, function(image) {
      if (whichone == 1) {
        $scope.userForm.image = image;
        if (uploadtype == 'single') {
          $scope.userForm.image = image[0];
        }
      } else if (whichone == 2) {
        $scope.userForm.images = image;
        if (uploadtype == 'single') {
          $scope.userForm.images = image[0];
        }
      }
    });
  };

  $scope.removeimagehomeslide = function(i) {
    $scope.userForm.images.splice(i, 1);
  };

})

.controller('EditTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $location, $state, $stateParams) {
  var uploadres = [];
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("templatesdetail");
  $scope.menutitle = NavigationService.makeactive("Edit Templates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Templates'
  };
  $scope.userForm = {};
  $scope.userForm = {};
  $scope.userForm.images = [];
  NavigationService.getTemplatesEditDetail($stateParams.id, function(data) {
    console.log('on suggest plan');
    console.log('getSuggestionDetail', data);
    $scope.userForm = data.data;
  });
  $scope.templatesSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      NavigationService.editTemplatesSubmit($scope.userForm, function(data) {
        console.log('response:', data);
        $state.go("templates");
      });
    }
  };
  $scope.removeimagecerti = function() {
    $scope.userForm.image = '';
  };
  $scope.onFileSelect = function($files, whichone, uploadtype) {
    globalfunction.onFileSelect($files, function(image) {
      if (whichone == 1) {
        if (uploadtype == 'multiple') {
          if ($scope.userForm.image.length > 0) {
            _.each(image, function(n) {
              $scope.userForm.image.push(n);
            });
          } else {
            $scope.userForm.image = image;
          }
        } else if (uploadtype == 'single') {
          $scope.userForm.image = image[0];
        }
      } else if (whichone == 2) {
        if (uploadtype == 'multiple') {
          if ($scope.userForm.images.length > 0) {
            _.each(image, function(n) {
              $scope.userForm.images.push(n);
            });
          } else {
            $scope.userForm.images = image;
          }
        } else if (uploadtype == 'single') {
          $scope.userForm.images = image[0];
        }
      }
    });
  };
  $scope.removeimagehomeslide = function(i) {
    $scope.userForm.images.splice(i, 1);
  };
})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("blog");
  $scope.menutitle = NavigationService.makeactive("Blog");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "title";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchBlog($scope.pagedata, function(data) {
      $scope.blogdata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();


  $scope.allBlogRecords = function() {
    // NavigationService.viewAllBlogSubmit($scope.userForm, function(data) {
    //     $scope.blogdata = data.data;
    //     console.log('user data', data.data);
    // });
    $scope.search();
  };

  // NavigationService.viewAllBlogSubmit($scope.userForm, function(data) {
  //     $scope.blogdata = data.data;
  //     console.log('user data', data.data);
  // });

  $scope.deleteblog = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteBlogData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {
        $scope.allBlogRecords();
      }
    });
  };
})

.controller('CreateBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("blogdetail");
  $scope.menutitle = NavigationService.makeactive("Create Blog");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Blog'
  };
  $scope.userForm = {};
  $scope.blogSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.createBlogSubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
        $state.go("blog");
      });
    }
  };

  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user data', data.data);
  });
})

.controller('EditBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("blogdetail");
  $scope.menutitle = NavigationService.makeactive("Edit Blog");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Blog'
  };
  NavigationService.getBlogEditDetail($stateParams.id, function(data) {
    console.log("in edit blog");
    $scope.userForm = data.data;
    if ($scope.userForm.user) {
      $scope.userForm.user = $scope.userForm.user._id;
    }
    console.log('getUserEditDetail', $scope.userForm);
  });

  $scope.userForm = {};
  $scope.blogSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      $state.go("blog");
    }
    NavigationService.editBlogSubmit($scope.userForm, function(data) {
      console.log('response:', data);
    });
  };

  NavigationService.userViewAllSubmit($scope.userForm, function(data) {
    $scope.userdata = data.data;
    console.log('user data', data.data);
  });
})

.controller('DocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentationcategory");
  $scope.menutitle = NavigationService.makeactive("Documentation Category");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "name";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchDocumentationCategory($scope.pagedata, function(data) {
      $scope.documentationcategorydata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();


  $scope.allDocumentationCategoryRecords = function() {
    // NavigationService.viewAllDocumentationCategorySubmit($scope.userForm, function(data) {
    //     $scope.documentationcategorydata = data.data;
    //     console.log('user data', data.data);
    // });
    $scope.search();
  };

  // NavigationService.viewAllDocumentationCategorySubmit($scope.userForm, function(data) {
  //     $scope.documentationcategorydata = data.data;
  //     console.log('user data', data.data);
  // });


  $scope.deletedocumentationcategory = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteDocumentationCategoryData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allDocumentationCategoryRecords();
      }

    });
  };
})

.controller('CreateDocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentationcategorydetail");
  $scope.menutitle = NavigationService.makeactive("Create Documentation Category");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Documentation Category'
  };
  $scope.userForm = {};
  $scope.documentationcategorySubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      //$scope.formComplete = true;
      NavigationService.createDocumentationCategorySubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
        $state.go("documentationcategory");
      });
    }
  };
})

.controller('EditDocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentationcategorydetail");
  $scope.menutitle = NavigationService.makeactive("Edit Documentation Category");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Documentation Category'
  };
  NavigationService.getDocumentationCategoryEditDetail($stateParams.id, function(data) {
    console.log('getUserEditDetail', data);
    $scope.userForm = data.data;
  });
  $scope.userForm = {};
  $scope.documentationcategorySubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      $state.go("documentationcategory");
    }
    NavigationService.editDocumentationCategorySubmit($scope.userForm, function(data) {
      console.log('response:', data);
    });

  };
})

.controller('DocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentation");
  $scope.menutitle = NavigationService.makeactive("Documentation");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.userForm = {};
  $scope.pagedata = {};
  $scope.pagedata.page = 1;
  $scope.pagedata.limit = '10';
  $scope.pagedata.search = '';

  $scope.pagedata.sort = "title";
  $scope.pagedata.sortnum = 1;

  $scope.search = function() {
    NavigationService.searchDocumentation($scope.pagedata, function(data) {
      $scope.documentationdata = data.data;
      console.log(data.data);
      $scope.totalItems = data.data.total;
    });

  };
  $scope.search();

  $scope.allDocumentationRecords = function() {
    $scope.search();
    // NavigationService.viewAllDocumentationSubmit($scope.userForm, function(data) {
    //     $scope.documentationdata = data.data;
    //     console.log('user data', data.data);
    // });
  };

  // NavigationService.viewAllDocumentationSubmit($scope.userForm, function(data) {
  //     $scope.documentationdata = data.data;
  //     console.log('user data', data.data);
  // });


  $scope.deletedocumentation = function(formValid) {
    console.log('formvalid', formValid);
    NavigationService.deleteDocumentationData({
      id: formValid
    }, function(data) {
      console.log('delete data:', data);
      if (data.value === true) {

        $scope.allDocumentationRecords();
      }

    });
  };
})

.controller('CreateDocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentationdetail");
  $scope.menutitle = NavigationService.makeactive("Create Documentation");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Create Documentation'
  };
  $scope.userForm = {};
  $scope.documentationSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      NavigationService.createDocumentationSubmit($scope.userForm, function(data) {
        console.log('userform', $scope.userForm);
        $state.go("documentation");
      });
    }
  };
  NavigationService.viewAllDocumentationCategorySubmit($scope.userForm, function(data) {
    $scope.documentationcategorydata = data.data;
    console.log('user data', data.data);
  });
})

.controller('EditDocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("documentationdetail");
  $scope.menutitle = NavigationService.makeactive("Edit Documentation");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.header = {
    name: 'Edit Documentation'
  };
  NavigationService.getDocumentationEditDetail($stateParams.id, function(data) {
    console.log('getUserEditDetail', data);
    $scope.userForm = data.data;
    if ($scope.userForm.DocumentationCategory) {
      $scope.userForm.DocumentationCategory = $scope.userForm.DocumentationCategory._id;
    }
    // if ($scope.userForm.user) {
    //     $scope.userForm.user = $scope.userForm.user._id;
    // }
  });
  $scope.userForm = {};
  $scope.documentationSubmitForm = function(formValid) {
    console.log('user form:', $scope.userForm);
    if (formValid.$valid) {
      $scope.formComplete = true;
      $state.go("documentation");
    }
    NavigationService.editDocumentationSubmit($scope.userForm, function(data) {
      console.log('response:', data);
    });
  };
  NavigationService.viewAllDocumentationCategorySubmit($scope.userForm, function(data) {
    $scope.documentationcategorydata = data.data;
    console.log('user data', data.data);
  });
})


.controller('headerctrl', function($scope, TemplateService, $location, NavigationService, $timeout) {
  $scope.template = TemplateService;


});
