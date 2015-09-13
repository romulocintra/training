'use strict';

describe("Unit: Testing studentsController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working studentsController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('studentsController', {
            $scope: scope
        });

        expect(scope.name).toEqual('students');
    }));

});
