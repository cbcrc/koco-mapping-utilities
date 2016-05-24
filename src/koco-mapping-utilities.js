// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import ko from 'knockout';


function KnockoutMappingUtilities() {}

KnockoutMappingUtilities.prototype.mapAsObservableValueObjects = function(mapping, complexAttributeNames) {
    var self = this;

    for (var i = 0; i < complexAttributeNames.length; i++) {
        self.mapAsObservableValueObject(mapping, complexAttributeNames[i]);
    }
};

KnockoutMappingUtilities.prototype.mapAsObservableValueObject = function(mapping, complexAttributeName) {
    mapping[complexAttributeName] = {
        update: asObservableValueObject
    };
};

KnockoutMappingUtilities.prototype.toJS = function(x) {
    if (!x) {
        return x;
    }

    var result = ko.unwrap(x);

    if (!result) {
        return result;
    }

    if (result.__ko_mapping__) {
        return ko.mapping.toJS(result);
    }

    return ko.toJS(result);
};

function asObservableValueObject(options) {
    if (!options.data) {
        return null;
    }

    return ko.observable(options.data);
}

export default new KnockoutMappingUtilities();
