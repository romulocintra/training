'use strict';

describe("Unit: Testing webworkersController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working webworkersController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('webworkersController', {
            $scope: scope
        });

        expect(scope.name).toEqual('webworkers');
    }));

});
