/*jshint node:true */
'use strict';

describe("E2E: Testing Routes translate", function () {

    it('should have a working /translate route', function () {
        browser().navigateTo('#/translate');
        expect(browser().location().path()).toBe("/translate");
    });

});
