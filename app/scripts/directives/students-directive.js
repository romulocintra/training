'use strict'
angular
    .module('App.Services')
    .directive('studentForm', studentForm);


function studentForm() {
    return {
        restrict: 'AEC',
        scope: false,
        templateUrl: 'views/studentsHTTP/student-directive.html'

    };
}
