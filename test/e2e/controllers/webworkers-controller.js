//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing webworkers", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working webworkers page ', function () {
        browser().navigateTo('#/webworkers');
        expect(browser().location().path()).toBe("/webworkers");
        expect(element('[class="lead"]').html()).toContain('webworkers');
    });

});
