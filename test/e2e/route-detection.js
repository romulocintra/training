/*jshint node:true */
'use strict';

describe("E2E: Testing Routes detection", function () {

    it('should have a working /detection route', function () {
        browser().navigateTo('#/detection');
        expect(browser().location().path()).toBe("/detection");
    });

});
