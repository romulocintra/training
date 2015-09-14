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
        'pascalprecht.translate',
        'appverse'
    ]).run(function ($log ,   $translate) {
        $log.debug('trainingApp run');
            $translate.uses('es-ES');
    });
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': '',

            },
            'SERVERPUSH_CONFIG': {
                'BaseUrl': 'http://127.0.0.1:3000'
            },
            'I18N_CONFIG': {
                LocaleFilePattern: 'bower_components/angular-i18n/angular-locale_{{locale}}.js'
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
}());
