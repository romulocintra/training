(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('App.Services', []);
    angular.module('trainingApp', [

        'appverse.serverPush',
        'appverse.cache',
        'appverse.rest',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'restangular',
        'appverse.router',
        'App.Services',
        'App.Controllers',
        'appverse.detection',
        'appverse.logging',
        'appverse.performance',
        'appverse.translate',
        'appverse'
    ]).run(function ($log) {
        $log.debug('trainingApp run');
    });
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            },
            'SERVERPUSH_CONFIG': {
                'BaseUrl': 'http://127.0.0.1:3000'
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
}());