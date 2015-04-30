define([
        'angular',
        './namespace',
        './core/namespace',
        './modules/home/namespace',

        'ionic',
        'angular-animate',
        'angular-ui-router',
        'ionic-angular',
        'ng-cordova',
        './routes',

        './core/module.require',
        './modules/home/module.require',
    ],
    function(angular, namespace,
        namespaceCore,
        namespaceHome
    ) {
        'use strict';
        var app = angular.module(namespace, [

            'ionic',
            'ngAnimate',
            'ui.router',

            namespaceCore,
            namespaceHome

        ]).run(function() {
            console.log('Application Started');
        })
        return app;
    });
