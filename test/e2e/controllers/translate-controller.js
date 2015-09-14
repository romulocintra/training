//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing translate", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working translate page ', function () {
        browser().navigateTo('#/translate');
        expect(browser().location().path()).toBe("/translate");
        expect(element('[class="lead"]').html()).toContain('translate');
    });

});
