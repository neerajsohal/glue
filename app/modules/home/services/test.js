define([
        '../module',
        '../namespace'
    ],
    function (module, namespace) {
        'use strict';

        var name = namespace + ".test";
        var dependencies = ['$log'];
        var service = function ($log) {
            return {
                add : function (v1, v2) {
                    $log.debug("add function");
                    return v1 + v2;
                }

            };
        };

        module.factory(name, dependencies.concat(service));
    });