'use strict';

require.config({
    paths: {
        angular: '../node_modules/angular/angular',
        uiRouter: '../node_modules/angular-ui-router/release/angular-ui-router',
        'angular-animate': '../node_modules/angular-animate/angular-animate'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter: {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    },
    deps: ['app']
});
