/// <reference path="../lib/jasmine-2.3.4/jasmine.js" />
/// <reference path="../lib/jasmine-2.3.4/jasmine-html.js" />
/// <reference path="../lib/jasmine-2.3.4/boot.js" />


describe("Config Tests", function () {
    it("Config object should exist", function () {
        var o = config;
        expect(typeof(o)).toEqual("object");
    });

    it("should contain a url property", function () {
        expect(config.url).toBeDefined();
    });

    it("should contain a local url property", function () {
        expect(config.localUrl).toBeDefined();
    });

    it("should contain a warningTreshold property of 30", function () {
        expect(config).toHaveProperty("warningTreshold");
        expect(config.warningTreshold).toEqual(30);
    });
});