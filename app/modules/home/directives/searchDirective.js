define([
        '../module',
        '../namespace'
    ],
function (module, namespace) {
    'use strict';

    var name = namespace + ".searchDirective";
    
    var dependencies = ['$scope', 'ngSanitize', 'ui.select'];
    var controller = function ($scope) {
        $scope.phones = [
            {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.'}
          ];
    };
    
    module.controller(name, dependencies.concat(controller));

});