/* global angular */

(function() {
  angular.module("app").controller("peopleCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
      $scope.sortAttribute = 'name';
      $scope.sortDescending = false;
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

    $scope.deletePerson = function(inputPerson) {
      var index = $scope.people.indexOf(inputPerson);
      $scope.people.splice(index, 1);
    };

    $scope.sortBy = function(inputSortAttribute) {
      if (inputSortAttribute !== $scope.sortAttribute) {
        $scope.sortDescending = false;
      } else {
        $scope.sortDescending = !$scope.sortDescending;
      }
      $scope.sortAttribute = inputSortAttribute;
    };

    window.$scope = $scope;
  }]);
})();
