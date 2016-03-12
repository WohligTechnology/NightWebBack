// var adminURL = "";
var adminurl = "http://192.168.0.124:1337/";
var imgpath = "http://vignesh.com/uploadfile/upload/";

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
  }, {
    name: "Blog",
    classis: "active",
    anchor: "blog",
    icon: "rss",
    subnav: []
  }, {
    name: "Documentation Category",
    classis: "active",
    anchor: "documentationcategory",
    icon: "book",
    subnav: []
  }, {
    name: "Documentation",
    classis: "active",
    anchor: "documentation",
    icon: "book",
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
          "contact": formData.contact,
          "subject": formData.subject,
          "query": formData.query,
          "user":formData.user
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
          "contact": formData.contact,
          "subject": formData.subject,
          "query": formData.query,
          "user": formData.user
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






    templatesViewAllSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'template/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "description": formData.description,
          "name": formData.name,
          "text": formData.text
        }
      }).success(callback);
    },
    deleteTemplatesData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'template/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },
    templatesCreateSubmit: function(formData, callback) {
      console.log('Navigation form data: ', formData);
      $http({
        url: adminurl + 'template/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "image": formData.image,
          "name": formData.name,
          "images": formData.images,
          "text": formData.text,
          "description": formData.description,
        }
      }).success(callback);
    },
    getTemplatesEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'template/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editTemplatesSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'template/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "image": formData.image,
          "name": formData.name,
          "images": formData.images,
          "text": formData.text,
          "description": formData.description,
        }
      }).success(callback);
    },



    searchUser: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/findlimited',
        method: 'POST',
        withCredentials: true,
        data: {
          "search": formData.search,
          "pagesize,": formData.pagesize,
          "pagenumber,": formData.pagenumber,
        }
      }).success(callback);
    },

    userViewAllSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'user/viewAll',
        method: 'POST',
        withCredentials: true,
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
          "contact": formData.contact,
          "facebook": formData.facebook,
          "google": formData.google,
          "logintype": formData.logintype,
          "twitter": formData.twitter
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
          "contact": formData.contact,
          "facebook": formData.facebook,
          "google": formData.google,
          "logintype": formData.logintype,
          "twitter": formData.twitter
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
          "contact": formData.contact,
          "facebook": formData.facebook,
          "google": formData.google,
          "logintype": formData.logintype,
          "twitter": formData.twitter
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
          //"user": formData.userName
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
          "user":formData.user,
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
          "user":formData.user,
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

    createDocumentationCategorySubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentationcategory/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "description": formData.description,
          "name": formData.name,
          "status": formData.status
        }
      }).success(callback);
    },
    viewAllDocumentationCategorySubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentationcategory/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "description": formData.description,
          "name": formData.name
        }
      }).success(callback);
    },
    getDocumentationCategoryEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentationcategory/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editDocumentationCategorySubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'documentationcategory/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "description": formData.description,
          "name": formData.name,
          "status": formData.status
        }
      }).success(callback);
    },
    deleteDocumentationCategoryData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentationcategory/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,

        }
      }).success(callback);
    },

    createBlogSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'blog/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "content": formData.content,
          "title": formData.title,
          "user":formData.user,
          "status": formData.status
        }
      }).success(callback);
    },
    viewAllBlogSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'blog/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "title": formData.title,
          "status": formData.status,
        }
      }).success(callback);
    },
    getBlogEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'blog/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editBlogSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'blog/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "content": formData.content,
          "title": formData.title,
          "user":formData.user,
          "status": formData.status
        }
      }).success(callback);
    },
    deleteBlogData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'blog/delete',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData.id,
        }
      }).success(callback);
    },

    createDocumentationSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentation/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "content": formData.content,
          "title": formData.title,
          "DocumentationCategory":formData.DocumentationCategory,
          "status": formData.status
        }
      }).success(callback);
    },
    viewAllDocumentationSubmit: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentation/viewAll',
        method: 'POST',
        withCredentials: true,
        data: {
          "title": formData.title,
          "status": formData.status,
        }
      }).success(callback);
    },
    getDocumentationEditDetail: function(id, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentation/view',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": id
        }
      }).success(callback);
    },
    editDocumentationSubmit: function(formData, callback) {
      console.log('In service : ', formData);
      $http({
        url: adminurl + 'documentation/create',
        method: 'POST',
        withCredentials: true,
        data: {
          "_id": formData._id,
          "content": formData.content,
          "title": formData.title,
          "DocumentationCategory":formData.DocumentationCategory,
          "status": formData.status
        }
      }).success(callback);
    },
    deleteDocumentationData: function(formData, callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminurl + 'documentation/delete',
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
