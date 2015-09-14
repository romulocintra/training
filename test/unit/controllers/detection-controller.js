'use strict';

describe("Unit: Testing detectionController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working detectionController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('detectionController', {
            $scope: scope
        });

        expect(scope.name).toEqual('detection');
    }));

});
