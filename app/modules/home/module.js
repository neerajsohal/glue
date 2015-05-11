define([
        'angular',
        './namespace',
        '../../app',
        'ng-cordova',
    ],
    function(angular, namespace, app) {
        'use strict';

        return angular.module(namespace, ['ngCordova']);

    });
