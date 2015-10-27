/// <reference path="../lib/jasmine-2.3.4/jasmine.js" />
/// <reference path="../lib/jasmine-2.3.4/jasmine-html.js" />
/// <reference path="../lib/jasmine-2.3.4/boot.js" />

describe("ParkingDataService Test", function () {
    var service;
    beforeEach(function () {
        service = parkingService;
    });

    it("should be able to call a service", function () {
        expect(service).toBeDefined();
    });

    it("should contain a get method", function () {
        expect(service).toHaveMethod("get");
    });

    it("should contain a getById method", function () {
        expect(service).toHaveMethod("getById");
    });

    it("should be able to get several parking spots from the opendata service", function () {
        var data = service.get();
        expect(data).toBeDefined();
        expect(data.length).toBeGreaterThan(0);
    });

    it("should be able to get data of type Parking", function () {
        var data = service.get();
        expect(data[0]).toBeTypeOf('Parking');
    });
});


