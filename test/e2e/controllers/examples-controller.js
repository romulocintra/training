//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing examples", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working examples page ', function () {
        browser().navigateTo('#/examples');
        expect(browser().location().path()).toBe("/examples");
        expect(element('[class="lead"]').html()).toContain('examples');
    });

});
