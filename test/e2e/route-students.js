/*jshint node:true */
'use strict';

describe("E2E: Testing Routes students", function () {

    it('should have a working /students route', function () {
        browser().navigateTo('#/students');
        expect(browser().location().path()).toBe("/students");
    });

});
