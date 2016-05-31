(function() {
    'use strict';

    function Start($stateProvider) {
        $stateProvider.state('start example page', {
            url: '/start/example',
            templateUrl: 'start/views/index.html'
        }).state('start circles example', {
            url: '/start/example/:circle',
            templateUrl: 'start/views/example.html'
        });
    }

    angular
        .module('mean.start')
        .config(Start);

    Start.$inject = ['$stateProvider'];

})();
