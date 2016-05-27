(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'knockout'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('knockout'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.knockout);
        global.kocoMappingUtilities = mod.exports;
    }
})(this, function (exports, _knockout) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _knockout2 = _interopRequireDefault(_knockout);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function KnockoutMappingUtilities() {} // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    KnockoutMappingUtilities.prototype.mapAsObservableValueObjects = function (mapping, complexAttributeNames) {
        var self = this;

        for (var i = 0; i < complexAttributeNames.length; i++) {
            self.mapAsObservableValueObject(mapping, complexAttributeNames[i]);
        }
    };

    KnockoutMappingUtilities.prototype.mapAsObservableValueObject = function (mapping, complexAttributeName) {
        mapping[complexAttributeName] = {
            update: asObservableValueObject
        };
    };

    KnockoutMappingUtilities.prototype.toJS = function (x) {
        if (!x) {
            return x;
        }

        var result = _knockout2.default.unwrap(x);

        if (!result) {
            return result;
        }

        if (result.__ko_mapping__) {
            return _knockout2.default.mapping.toJS(result);
        }

        return _knockout2.default.toJS(result);
    };

    function asObservableValueObject(options) {
        if (!options.data) {
            return null;
        }

        return _knockout2.default.observable(options.data);
    }

    exports.default = new KnockoutMappingUtilities();
});