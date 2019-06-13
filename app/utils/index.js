"use strict";
exports.__esModule = true;
exports.createIndex = function (list, key) {
    return list.reduce(function (index, item) {
        if (!index[item[key]])
            index[item[key]] = item;
        return index;
    }, {});
};
