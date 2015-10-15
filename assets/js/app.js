// app.js
var App = angular.module('App', []);

App.controller('ResumeCtrl', function($scope, $http) {
  $http.get('resume.json')
    .then(function(res){
      // Storing the json data object as 'scores'
      $scope.resume = res.data;
    });
});

App.filter('ageFilter', function() {
     function calculateAge(birthdate) { // birthday is a date
         var birthday = new Date(birthdate);
         var ageDifMs = Date.now() - birthday.getTime();
         var ageDate = new Date(ageDifMs); // miliseconds from epoch
         return Math.abs(ageDate.getUTCFullYear() - 1970);
     }

     return function(birthdate) {
           return calculateAge(birthdate);
     };
});
