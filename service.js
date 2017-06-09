angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response) {
      var users = response.data.data;
      users.forEach(function(user) {
        user.last_name = 'McIver';
      });
      deferred.resolve(users)
    });
    return deferred.promise;
  }
});
