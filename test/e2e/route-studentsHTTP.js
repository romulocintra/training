/*jshint node:true */
'use strict';

describe("E2E: Testing Routes studentsHTTP", function () {

    it('should have a working /studentsHTTP route', function () {
        browser().navigateTo('#/studentsHTTP');
        expect(browser().location().path()).toBe("/studentsHTTP");
    });

});
