(function() {
    'use strict';

    function Start($http, $q) {
        return {
            name: 'start',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/start/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.start')
        .factory('Start', Start);

    Start.$inject = ['$http', '$q'];

})();
