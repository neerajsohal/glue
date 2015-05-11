define([
        '../module',
        '../namespace',
    ],
    function(module, namespace) {
        'use strict';

        var name = namespace + ".homeController";
        var dependencies = ['$scope', '$http'];
        var controller = function($scope, $http) {

            console.log(namespace + ' Controller Initialised')
            
        }

        return module.controller(name, dependencies.concat(controller));

    });
