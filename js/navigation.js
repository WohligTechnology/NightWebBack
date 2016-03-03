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
    name: "User",
    classis: "active",
    anchor: "user",
    icon: "users",
    subnav: []
  },
  {
    name: "UserNotification",
    classis: "active",
    anchor: "usernotification",
    subnav: []
  },{
    name: "UsernPlan",
    classis: "active",
    anchor: "userplan",
    subnav: []
  },{
    name: "Plan",
    classis: "active",
    anchor: "plan",
    subnav: []
  },{
    name: "Suggestion",
    classis: "active",
    anchor: "suggestion",
    subnav: []
  },{
    name: "Templates",
    classis: "active",
    anchor: "template",
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
