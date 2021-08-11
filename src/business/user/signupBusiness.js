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
exports.signupBusiness = void 0;
const UserDatabase_1 = require("../../data/user/UserDatabase");
const hashManager_1 = require("../../services/hashManager");
const idManager_1 = require("../../services/idManager");
const signupBusiness = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    if (!name || !email || !password) {
        throw new Error('"name", "email" and "password" must be provided');
    }
    if (!email.includes('@')) {
        throw new Error('Email is invalid!');
    }
    const userDatabase = new UserDatabase_1.UserDatabase();
    const userInDatabase = yield userDatabase.findByEmail(email);
    if (userInDatabase && userInDatabase.length > 0) {
        throw new Error('E-mail already registered');
    }
    const newUser = {
        id: idManager_1.generateId(),
        name,
        email,
        password: hashManager_1.generateHash(password)
    };
    yield userDatabase.create(newUser);
    return newUser;
});
exports.signupBusiness = signupBusiness;
//# sourceMappingURL=signupBusiness.js.map