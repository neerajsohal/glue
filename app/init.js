require(['config'], function() {

	require([
        'angular',
        'namespace',
        'app'
    ],
    function (angular, namespace, app) {
        angular.element(document).ready(function() {
             angular.bootstrap(document, [namespace]);
       });
    });
	
})