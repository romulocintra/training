'use strict';

describe("Unit: Testing studentsHTTPController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working studentsHTTPController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('studentsHTTPController', {
            $scope: scope
        });

        expect(scope.name).toEqual('studentsHTTP');
    }));

});
