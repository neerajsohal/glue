define([
        'angular',
        './module',
        './namespace',
    ],
    function(angular, module, namespace) {
        
        'use strict';

        return module.config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('home', {
                        url: '',
                        templateUrl: '/views/' + namespace.split('.')[1] + '/index.html',
                        controller : namespace + '.' + namespace.split('.')[1] + 'Controller'
                    })
            }
        ]);
    });
