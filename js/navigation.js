// var adminURL = "";
var adminurl = "http://192.168.0.124:1337/";

// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Users",
    classis: "active",
    anchor: "user",
    icon: "users",
    subnav: []
  }, {
    name: "User Notification",
    classis: "active",
    anchor: "usernotification",
    icon: "bell",
    subnav: []
  }, {
    name: "User Plan",
    classis: "active",
    anchor: "userplan",
    icon: "list-alt",
    subnav: []
  }, {
    name: "Plan",
    classis: "active",
    anchor: "plan",
    icon: "calendar",
    subnav: []
  }, {
    name: "Suggestion",
    classis: "active",
    anchor: "suggestion",
    icon: "lightbulb-o",
    subnav: []
  }, {
    name: "Templates",
    classis: "active",
    anchor: "templates",
    icon: "newspaper-o",
    subnav: []
  }];



  return {
    getnav: function() {
      return navigation;
    },
    editPlanSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'plan/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "description": formData.description,
          "name": formData.name
        }
      }).success(callback);
    },
    createPlanSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'plan/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "description": formData.description,
          "name": formData.name
        }
      }).success(callback);
    },
    viewAllPlanSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'plan/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "description": formData.description,
          "name": formData.name
        }
      }).success(callback);
    },
    getPlanDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'plan/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    deleteFormData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'plan/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },

    // editFormData: function(formData, callback) {
    //   // console.log('form data: ', formData);
    //   $http({
    //     url: adminurl + 'plan/view',
    //     method: 'POST',
    //     withCredentials: true,
    //     data: {
    //       "_id": formData._id,
    //       "description": formData.description,
    //       "name": formData.name
    //
    //     }
    //   }).success(callback);
    // },
    viewAllSuggestionSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'suggestion/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "name": formData.name
        }
      }).success(callback);
    },
    createSuggestionSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'suggestion/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "name": formData.name,
          "contact":formData.contact,
          "subject":formData.subject,
          "query":formData.query,
          //"user":formData.user
          // "query":formData.query,
          // "user":formData.user
        }
      }).success(callback);
    },
    deleteSuggestionData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'suggestion/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },
    editSuggestionSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'suggestion/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "email": formData.email,
          "name": formData.name,
          "contact":formData.contact,
          "subject":formData.subject,
          "query":formData.query,
          "user":formData.user
        }
      }).success(callback);
    },
    getSuggestionDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'suggestion/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },





    userViewAllSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "name": formData.name
        }
      }).success(callback);
    },

    userCreateSubmit: function(formData, callback) {
      console.log('Navigation form data: ', formData);
      $http({
        url: adminurl + 'user/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "email": formData.email,
          "_id": formData._id,
          "accesslevel": formData.accesslevel,
          "name": formData.name,
          "contact":formData.contact,
          "facebook":formData.facebook,
          "google":formData.google,
          "logintype":formData.logintype,
          "twitter":formData.twitter
        }
      }).success(callback);
    },

    deleteUserData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },

    getUserEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editUserSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'user/create',
        method: 'POST',
        withCredentials: true,
        data: {
            "_id": formData._id,
          "email": formData.email,
          "accesslevel": formData.accesslevel,
          "name": formData.name,
          "contact":formData.contact,
          "facebook":formData.facebook,
          "google":formData.google,
          "logintype":formData.logintype,
          "twitter":formData.twitter
        }
      }).success(callback);
    },



    userNotificationViewAllSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'usernotification/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "user": formData.user,
          "status": formData.status
        }
      }).success(callback);
    },

    userNotificationCreateSubmit: function(formData, callback) {
      console.log('Navigation form data: ', formData);
      $http({
        url: adminurl + 'usernotification/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "user": formData.user,
          "_id": formData._id,
          "status": formData.status
          // "name": formData.name,
          // "contact":formData.contact,
          // "facebook":formData.facebook,
          // "google":formData.google,
          // "logintype":formData.logintype,
          // "twitter":formData.twitter
        }
      }).success(callback);
    },

    deleteUserNotificationData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'usernotification/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },

    getUserNotificationEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'usernotification/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editUserNotificationSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'usernotification/create',
        method: 'POST',
        withCredentials: true,
        data: {
            "_id": formData._id,
          "user": formData.user,
          "accesslevel": formData.accesslevel,
          "name": formData.name,
          "contact":formData.contact,
          "facebook":formData.facebook,
          "google":formData.google,
          "logintype":formData.logintype,
          "twitter":formData.twitter
        }
      }).success(callback);
    },




    userPlanViewAllSubmit: function(formData, callback) {
           console.log('userPlanViewAllSubmit data: ', formData);
          $http({
            url: adminurl + 'userplan/viewAll',
            method: 'POST',
            withCredentials: true,
            data: {
              "plan": formData.plan,
              "user": formData.userName
            }
          }).success(callback);
        },

        userPlanCreateSubmit: function(formData, callback) {
          // console.log('form data: ', formData);
          $http({
            url: adminurl + 'userplan/create',
            method: 'POST',
            withCredentials: true,
            data: {
              "plan": formData.plan,
              "starttime": formData.starttime,
              "endtime": formData.endtime,
              "url": formData.url,
              "android": formData.android,
              "ios": formData.ios,
              "serverdetail": formData.serverdetail,
              "foldername": formData.foldername,


            }
          }).success(callback);
        },

        editUserPlanSubmit: function(formData, callback) {
          console.log('In service : ', formData);
          $http({
            url: adminurl + 'userplan/create',
            method: 'POST',
            withCredentials: true,
            data: {
              "_id": formData._id,
              "plan": formData.plan,
              "starttime": formData.starttime,
              "endtime": formData.endtime,
              "url": formData.url,
              "android": formData.android,
              "ios": formData.ios,
              "serverdetail": formData.serverdetail,
              "foldername": formData.foldername,
            }
          }).success(callback);
        },

        getUserPlanEditDetail: function(id, callback) {
          // console.log('form data: ', formData);
          $http({
            url: adminurl + 'userplan/view',
            method: 'POST',
            withCredentials: true,
            data: {
              "_id": id
            }
          }).success(callback);
        },

        deleteUserPlanData: function(formData, callback) {
          // console.log('form data: ', formData);
          $http({
            url: adminurl + 'userplan/delete',
            method: 'POST',
            withCredentials: true,
            data: {
              "_id": formData.id,

            }
          }).success(callback);
        },

    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
