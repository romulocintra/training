//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing detection", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working detection page ', function () {
        browser().navigateTo('#/detection');
        expect(browser().location().path()).toBe("/detection");
        expect(element('[class="lead"]').html()).toContain('detection');
    });

});
