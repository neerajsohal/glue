define([
        '../module',
        '../namespace',
        
    ],
    function(module, namespace) {
        'use strict';

        var name = namespace + ".searchController";

        var dependencies = ['$scope', '$http'];
        var controller = function($scope, $http) {
            alert('hello')
        };

        module.controller(name, dependencies.concat(controller));

    });
