'use strict';

describe("Unit: Testing translateController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working translateController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('translateController', {
            $scope: scope
        });

        expect(scope.name).toEqual('translate');
    }));

});
