"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFields = exports.bookSearchableFields = exports.bookFilterableFields = void 0;
exports.bookFilterableFields = [
    'title',
    'author',
    'genre',
    'price',
    'categoryId',
];
exports.bookSearchableFields = ['title', 'author', 'genre'];
exports.bookRelationalFields = ['category', 'reviewAndRating'];
