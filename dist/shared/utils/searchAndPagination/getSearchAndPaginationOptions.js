"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchAndPaginationOptions = void 0;
const pagination_1 = require("../../constants/pagination");
const searchAndFilterHelper_1 = __importDefault(require("../filter/searchAndFilterHelper"));
const paginationHelper_1 = __importDefault(require("../pagination/paginationHelper"));
const pick_1 = __importDefault(require("../pick"));
const getSearchAndPaginationOptions = (query, filterFields, searchFields) => {
    const filters = (0, pick_1.default)(query, filterFields);
    const search = (() => {
        if ('searchTerm' in query) {
            return query['searchTerm'];
        }
        return '';
    })();
    const paginationOptions = (0, pick_1.default)(query, pagination_1.paginationFields);
    const { page, limit, skip, sort } = (0, paginationHelper_1.default)(paginationOptions);
    const searchAndFilter = ((0, searchAndFilterHelper_1.default)(filters, search, searchFields));
    return {
        searchAndFilter,
        page,
        limit,
        skip,
        sort,
    };
};
exports.getSearchAndPaginationOptions = getSearchAndPaginationOptions;
