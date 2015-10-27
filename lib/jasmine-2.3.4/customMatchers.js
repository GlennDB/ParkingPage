var customMatchers = {
    toBeTypeOf: function () {
        return {
            compare: function (actual, expectedType) {
                var str = actual.constructor.toString();
                var typeOfActual = str.substring(9, str.indexOf("("));
                var isOk = typeOfActual === expectedType;
                return {
                    pass: isOk,
                    message: isOk ? "Expected " + actual + ' to be a ' + expectedType : "Expected " + actual + ' not to be a ' + expectedType
                }
            }
        }
    },
    toHaveProperty: function () {
        return {
            compare: function (actual, propertyName) {
                var isOK = actual.hasOwnProperty(propertyName);
                return {
                    pass: isOK
                }
            }
        }
    },
    toHaveMethod: function () {
        return {
            compare: function (actual, methodName) {
                var isOK = actual.hasOwnProperty(methodName);
                return {
                    pass: isOK
                }
            }
        }
    }
};

beforeEach(function () {
    jasmine.addMatchers(customMatchers);
});