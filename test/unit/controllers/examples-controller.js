'use strict';

describe("Unit: Testing examplesController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working examplesController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('examplesController', {
            $scope: scope
        });

        expect(scope.name).toEqual('examples');
    }));

});
