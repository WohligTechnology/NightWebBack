var adminURL = "";


if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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
