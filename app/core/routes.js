define([
        'angular',
        'module',
        './namespace',
        '../app'

    ],
    function (angular, module, namespace ) {
        'use strict';
        
       return angular.module(namespace, []).config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

            }
        ]);
    });

