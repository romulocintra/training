/*jshint node:true */
'use strict';

describe("E2E: Testing Routes webworkers", function () {

    it('should have a working /webworkers route', function () {
        browser().navigateTo('#/webworkers');
        expect(browser().location().path()).toBe("/webworkers");
    });

});
