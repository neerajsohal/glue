require.config({
    baseUrl: './src/',
    paths: {
        "angular": "../vendor/angular/angular",
        'ionic': '../vendor/ionic/release/js/ionic',
        'ionic-angular': '../vendor/ionic/release/js/ionic-angular',
        
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',
        'angular-animate': '../vendor/angular-animate/angular-animate',

        "text": "../vendor/requirejs-text/text",
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
        }
    }

});    
