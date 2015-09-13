//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing studentsHTTP", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working studentsHTTP page ', function () {
        browser().navigateTo('#/studentsHTTP');
        expect(browser().location().path()).toBe("/studentsHTTP");
        expect(element('[class="lead"]').html()).toContain('studentsHTTP');
    });

});
