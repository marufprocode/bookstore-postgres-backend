"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield prisma.user.create({
        data: userData,
    });
    return newUser;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return users;
});
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id: userId },
    });
    return user;
});
const updateUserById = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield prisma.user.update({
        where: { id: userId },
        data: userData,
    });
    return updatedUser;
});
const getUserProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id: userId },
        select: {
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImage: true,
        },
    });
    return user;
});
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.user.delete({
        where: { id: userId },
    });
});
exports.userService = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getUserProfile,
};
