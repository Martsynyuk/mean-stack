(function() {
    'use strict';

    function Testing($http, $q) {
        return {
            name: 'testing',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/testing/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.testing')
        .factory('Testing', Testing);

    Testing.$inject = ['$http', '$q'];

})();
