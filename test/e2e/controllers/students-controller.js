//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing students", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working students page ', function () {
        browser().navigateTo('#/students');
        expect(browser().location().path()).toBe("/students");
        expect(element('[class="lead"]').html()).toContain('students');
    });

});
