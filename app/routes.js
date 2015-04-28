define([
        'angular',
        'app',
    ],
    function (angular, app) {
        'use strict';

        return angular.module('', []).config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');
            }
        ]);
    });
