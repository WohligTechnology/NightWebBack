var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function($http,$timeout) {
  this.title = "Home";
  this.meta = "Google";
  this.metadesc = "Home";

  var d = new Date();
  this.year = d.getFullYear();

  this.init = function() {
    this.sidemenu = "views/sidemenu.html";
    this.header = "views/header.html";
    this.content = "views/content/content.html";
    this.footer = "views/footer.html";
  };

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };


  this.upload = function(image) {

    $timeout(function() {
      console.log(image);
      image.hide = true;
      var formData = new FormData();
      formData.append('file', image.file, image.name);
      $http.post(adminurl + 'upload', formData, {
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity
      }).success(function(data) {
        console.log(data);
      });
    },1000);

  };

  this.init();

});
