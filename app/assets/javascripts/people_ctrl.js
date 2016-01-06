/* global angular */

(function() {
  angular.module("app").controller("peopleCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.toggleBio = function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
    };

    $scope.addPerson = function(inputName, inputBio) {
      var person = {
        name: inputName,
        bio: inputBio
      };
      $http.post('/api/v1/people.json', person).then(function(response) {
        console.log(response);
        $scope.people.push(person);
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
    };

    $scope.deletePerson = function(inputIndex) {
      $scope.people.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();