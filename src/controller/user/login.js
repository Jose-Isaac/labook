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
exports.login = void 0;
const loginBusiness_1 = require("../../business/user/loginBusiness");
const authorizationManager_1 = require("../../services/authorizationManager");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield loginBusiness_1.loginBusiness({ email, password });
        const token = authorizationManager_1.generateToken({
            id: user.id
        });
        res.status(200).send({ message: 'Success', token });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map