"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchAndFilterHelper = (filters, search, searchFields) => {
    const { minPrice, maxPrice } = filters, filtersData = __rest(filters, ["minPrice", "maxPrice"]);
    const searchAndFilter = [];
    const filterDataArray = Object.keys(filtersData);
    if (search) {
        searchAndFilter.push({
            $or: searchFields.map((field) => ({
                [field]: { $regex: search, $options: 'i' },
            })),
        });
    }
    else {
        searchAndFilter.push({});
    }
    if (filterDataArray === null || filterDataArray === void 0 ? void 0 : filterDataArray.length) {
        searchAndFilter.push({
            $and: filterDataArray.map((field) => ({
                [field]: filtersData[field],
            })),
        });
    }
    if (minPrice !== undefined && maxPrice !== undefined) {
        searchAndFilter.push({
            price: { $gte: minPrice, $lte: maxPrice },
        });
    }
    else if (minPrice !== undefined) {
        searchAndFilter.push({
            price: { $gte: minPrice },
        });
    }
    else if (maxPrice !== undefined) {
        searchAndFilter.push({
            price: { $lte: maxPrice },
        });
    }
    return { $and: searchAndFilter };
};
exports.default = searchAndFilterHelper;
