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
exports.loginBusiness = void 0;
const UserDatabase_1 = require("../../data/user/UserDatabase");
const hashManager_1 = require("../../services/hashManager");
const loginBusiness = (access) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = access;
    if (!email || !password) {
        throw new Error('"email" and "password" must be provided');
    }
    const queryResult = yield new UserDatabase_1.UserDatabase().findByEmail(email);
    if (!queryResult[0]) {
        throw new Error("Invalid credentials");
    }
    const user = {
        id: queryResult[0].id,
        name: queryResult[0].name,
        email: queryResult[0].email,
        password: queryResult[0].password
    };
    const passwordIsCorrect = hashManager_1.compareHash(password, user.password);
    if (!passwordIsCorrect) {
        throw new Error("Invalid credentials");
    }
    return user;
});
exports.loginBusiness = loginBusiness;
//# sourceMappingURL=loginBusiness.js.map