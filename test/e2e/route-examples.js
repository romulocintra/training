/*jshint node:true */
'use strict';

describe("E2E: Testing Routes examples", function () {

    it('should have a working /examples route', function () {
        browser().navigateTo('#/examples');
        expect(browser().location().path()).toBe("/examples");
    });

});
