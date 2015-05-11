require.config({
    baseUrl: './glue/',
    waitSeconds : 20, //make sure it is enough to load all scripts
    paths: {
        "angular": "../vendor/angular/angular",
        'ionic': '../vendor/ionic/release/js/ionic',
        'ionic-angular': '../vendor/ionic/release/js/ionic-angular',
        
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',
        'angular-animate': '../vendor/angular-animate/angular-animate',

        'ng-cordova': "../vendor/ngCordova/dist/ng-cordova.min",
        
        "text": "../vendor/requirejs-text/text",
        "async": '../vendor/requirejs-plugins/src/async',
        'underscore' : '../vendor/underscore/underscore',
    },
    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angular-ui-router' : {
            deps : ['angular'],
        },
        'angular-animate' : {
            deps : ['angular']
        },
        'angular-sanitize' : {
            deps : ['angular']
        },
        'ionic-angular' : {
            deps : [
                'angular-animate',
                'angular-sanitize',
                'angular-ui-router'
            ]
        },
        'ng-cordova' : {
            exports: 'ngCordova'
        },

    }

});    
