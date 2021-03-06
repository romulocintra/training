//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('trainingApp')
    .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

                ///////////////////////////////
                // 1-Redirects and Otherwise //
                ///////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                //                .when('/t?id', '/topics/:id')
                //                    .when('/t/:id', '/topics/:id')


                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                    .otherwise('/home');


                //////////////////////////
                // 2-State Configurations
                // Several states hav been configured:
                // home
                // tasks
                //
                //////////////////////////

                // We must configure states using $stateProvider.
                $stateProvider.state('websocket', {url: '/websocket',templateUrl: 'views/websocket/websocket.html',controller: 'websocketController'}).state('detection', {url: '/detection',templateUrl: 'views/detection/detection.html',controller: 'detectionController'}).state('webworkers', {url: '/webworkers',templateUrl: 'views/webworkers/webworkers.html',controller: 'webworkersController'}).state('translate', {url: '/translate',templateUrl: 'views/translate/translate.html',controller: 'translateController'}).state('studentsHTTP', {url: '/studentsHTTP',templateUrl: 'views/studentsHTTP/studentsHTTP.html',controller: 'studentsHTTPController'}).state('students', {url: '/students',templateUrl: 'views/students/students.html',controller: 'studentsController'})

                //////////
                // Examples //
                //////////


                    .state('examples', {
                    url: '/examples',
                    templateUrl: 'views/examples/examples.html',
                    controller: 'examplesController'
                })

                //////////
                // Home //
                //////////

                .state("home", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/home",
                    templateUrl: 'views/home.html'

                })

                .state("theme", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/theme",
                    templateUrl: 'views/theme.html'

                })

                .state("components", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/components",
                    templateUrl: 'views/components.html',
                    controller: 'ComponentsController'
                })

                .state("charts", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/charts",
                    templateUrl: 'views/charts.html',
                    controller: 'ChartsController'
                })

                ;
            }]);