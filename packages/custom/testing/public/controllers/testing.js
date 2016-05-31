(function() {
    'use strict';

    /* jshint -W098 */

    function TestingController($scope, Global, Testing, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'testing'
        };

        $scope.checkCircle = function() {
            Testing.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.testing')
        .controller('TestingController', TestingController);

    TestingController.$inject = ['$scope', 'Global', 'Testing', '$stateParams'];

})();
