(function() {
    'use strict';

    /* jshint -W098 */

    function StartController($scope, Global, Start, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'start'
        };

        $scope.checkCircle = function() {
            Start.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.start')
        .controller('StartController', StartController);

    StartController.$inject = ['$scope', 'Global', 'Start', '$stateParams'];

})();
