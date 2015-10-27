/// <reference path="../lib/jasmine-2.3.4/jasmine.js" />
/// <reference path="../lib/jasmine-2.3.4/jasmine-html.js" />
/// <reference path="../lib/jasmine-2.3.4/boot.js" />

describe("ParkingOverviewViewModel Test", function () {
    it("should have a parkingspots property", function(){
        expect(vm).toHaveProperty("parkingSpots");
    });

    it("should have a showParkingSpotsMethod method", function () {
        expect(vm).toHaveMethod("showParkingSpots");
    });

    it("should throw an error when showParkingSpots are called but no parkingSpots are defined", function () {
        expect(vm.showParkingSpots).toThrow();
    });
});