// var adminURL = "";
var adminurl = "http://192.168.0.124:1337/plan/";

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
  },
  {
    name: "User Notification",
    classis: "active",
    anchor: "usernotification",
    icon: "bell",
    subnav: []
  },{
    name: "User Plan",
    classis: "active",
    anchor: "userplan",
    icon: "list-alt",
    subnav: []
  },{
    name: "Plan",
    classis: "active",
    anchor: "plan",
    icon: "calendar",
    subnav: []
  },{
    name: "Suggestion",
    classis: "active",
    anchor: "suggestion",
    icon: "lightbulb-o",
    subnav: []
  },{
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
    createPlanSubmit: function(formData, callback) {
        // console.log('form data: ', formData);
        $http({
          url: adminurl + 'create',
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
            url: adminurl + 'viewAll',
            method: 'POST',
            withCredentials: true,
            data: {
              "description": formData.description,
              "name": formData.name
            }
          }).success(callback);
        },

    userCreateSubmit: function(formData, callback) {
        // console.log('form data: ', formData);
        $http({
          url: adminurl + 'create',
          method: 'POST',
          withCredentials: true,
          data: {
            "email": formData.email,
            "id": formData.id,
            "accessLevel": formData.accessLevel,
            "name": formData.name,
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
