(function() {
    'use strict';

    function Testing($stateProvider) {
        $stateProvider.state('testing example page', {
            url: '/testing/example',
            templateUrl: 'testing/views/index.html'
        }).state('testing circles example', {
            url: '/testing/example/:circle',
            templateUrl: 'testing/views/example.html'
        });
    }

    angular
        .module('mean.testing')
        .config(Testing);

    Testing.$inject = ['$stateProvider'];

})();
