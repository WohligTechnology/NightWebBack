var uploadres = [];
var selectedData = [];
var abc = {};
var globalfunction = {};

var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.select2', 'angularFileUpload']);
    // 'tableSort'
    window.uploadurl = "http://192.168.0.126/uploadfile/upload/";

phonecatControllers.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    });

phonecatControllers.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("user");
    $scope.menutitle = NavigationService.makeactive("Users");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.thead=['#','Name','Email','Action'];
    $scope.userForm = {};
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = '10';
    $scope.pagedata.search = '';
    $scope.pagedata.sort = "name";
    $scope.pagedata.sortnum = 1;

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



});

phonecatControllers.controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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


});

phonecatControllers.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});

phonecatControllers.controller('UserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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

});

phonecatControllers.controller('CreateUserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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

});

phonecatControllers.controller('EditUserNotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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


});


phonecatControllers.controller('UserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
    });

    phonecatControllers.controller('CreateUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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
    });

phonecatControllers.controller('EditUserPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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

});


phonecatControllers.controller('PlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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



});

phonecatControllers.controller('CreatePlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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

});

phonecatControllers.controller('EditPlanCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});

phonecatControllers.controller('SuggestCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
});

phonecatControllers.controller('CreateSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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
});

phonecatControllers.controller('EditSuggestCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});

phonecatControllers.controller('TemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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


});

phonecatControllers.controller('CreateTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $location) {
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
        $scope.vendors.certi = '';
    };
    $scope.onFileSelect = function($files, whichone, uploadtype) {
        globalfunction.onFileSelect($files, function(image) {
            if (whichone == 1) {
                $scope.vendors.logourl = image;
                if (uploadtype == 'single') {
                    $scope.vendors.logourl = image[0];
                }
            } else if (whichone == 2) {
                $scope.vendors.bannerurl = image;
                if (uploadtype == 'single') {
                    $scope.vendors.bannerurl = image[0];
                }
            }
        });
    };

    $scope.removeimagehomeslide = function(i) {
        $scope.vendors.bannerurl.splice(i, 1);
    };

});

phonecatControllers.controller('EditTemplatesCtrl', function($scope, TemplateService, NavigationService, $timeout, $location, $state, $stateParams) {
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
        $scope.vendors.certi = '';
    };
    $scope.onFileSelect = function($files, whichone, uploadtype) {
        globalfunction.onFileSelect($files, function(image) {
            if (whichone == 1) {
                if (uploadtype == 'multiple') {
                    if ($scope.vendors.logourl.length > 0) {
                        _.each(image, function(n) {
                            $scope.vendors.logourl.push(n);
                        });
                    } else {
                        $scope.vendors.logourl = image;
                    }
                } else if (uploadtype == 'single') {
                    $scope.vendors.logourl = image[0];
                }
            } else if (whichone == 2) {
                if (uploadtype == 'multiple') {
                    if ($scope.vendors.bannerurl.length > 0) {
                        _.each(image, function(n) {
                            $scope.vendors.bannerurl.push(n);
                        });
                    } else {
                        $scope.vendors.bannerurl = image;
                    }
                } else if (uploadtype == 'single') {
                    $scope.vendors.bannerurl = image[0];
                }
            }
        });
    };
    $scope.removeimagehomeslide = function(i) {
        $scope.vendors.bannerurl.splice(i, 1);
    };
});

phonecatControllers.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
});

phonecatControllers.controller('CreateBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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
});

phonecatControllers.controller('EditBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});


phonecatControllers.controller('DocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
});

phonecatControllers.controller('CreateDocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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
});

phonecatControllers.controller('EditDocumentationCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});

phonecatControllers.controller('DocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
});

phonecatControllers.controller('CreateDocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
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
});

phonecatControllers.controller('EditDocumentationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
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
});


phonecatControllers.controller('headerctrl', function($scope, TemplateService, $location, NavigationService,$upload,$timeout) {
    $scope.template = TemplateService;
    // $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    //   $(window).scrollTop(0);
    // });
    var imagejstupld = "";
    $scope.images = [];
    $scope.usingFlash = FileAPI && FileAPI.upload != null;
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
    $scope.uploadRightAway = true;
    $scope.changeAngularVersion = function() {
        window.location.hash = $scope.angularVersion;
        window.location.reload(true);
    };
    $scope.hasUploader = function(index) {
        return $scope.upload[index] != null;
    };
    $scope.abort = function(index) {
        $scope.upload[index].abort();
        $scope.upload[index] = null;
    };
    $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
        window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';

    var arrLength = 0;

    globalfunction.onFileSelect = function($files, callback) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        console.log($files);
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = uploadres;
        $scope.selectedFiles = $files;
        $scope.dataUrls = [];
        arrLength = $files.length;
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($files[i]);
                var loadFile = function(fileReader, index) {
                    fileReader.onload = function(e) {
                        $timeout(function() {
                            $scope.dataUrls[index] = e.target.result;
                        });
                    };
                }(fileReader, i);
            }
            $scope.progress[i] = -1;
            if ($scope.uploadRightAway) {
                $scope.start(i, callback);
            }
        }
    };

    $scope.start = function(index, callback) {
        $scope.progress[index] = 0;
        $scope.errorMsg = null;
        console.log($scope.howToSend = 1);
        if ($scope.howToSend == 1) {
            $scope.upload[index] = $upload.upload({
                url: uploadUrl,
                method: $scope.httpMethod,
                headers: {
                    'Content-Type': 'Content-Type'
                },
                data: {
                    myModel: $scope.myModel
                },
                file: $scope.selectedFiles[index],
                fileFormDataName: 'file'
            });
            $scope.upload[index].then(function(response) {
                $timeout(function() {
                  console.log(response);
                    $scope.uploadResult.push(response.data);
                    imagejstupld = response.data;

                    if (imagejstupld != "") {
                        $scope.images.push(imagejstupld.fileId);
                        console.log($scope.images);
                        imagejstupld = "";
                        if (arrLength == $scope.images.length) {
                            callback($scope.images);
                            $scope.images = [];
                        }
                    }
                });
            }, function(response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
            $scope.upload[index].xhr(function(xhr) {});
        } else {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                $scope.upload[index] = $upload.http({
                    url: uploadUrl,
                    headers: {
                        'Content-Type': $scope.selectedFiles[index].type
                    },
                    data: e.target.result
                }).then(function(response) {
                    $scope.uploadResult.push(response.data);
                }, function(response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function(evt) {
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            };
            fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
        }
    };

    $scope.dragOverClass = function($event) {
        var items = $event.dataTransfer.items;
        var hasFile = false;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].kind == 'file') {
                    hasFile = true;
                    break;
                }
            }
        } else {
            hasFile = true;
        }
        return hasFile ? "dragover" : "dragover-err";
    };

});
