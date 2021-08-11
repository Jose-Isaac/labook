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
exports.signup = void 0;
const authorizationManager_1 = require("./../../services/authorizationManager");
const signupBusiness_1 = require("../../business/user/signupBusiness");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const newUser = yield signupBusiness_1.signupBusiness({ name, email, password });
        const token = authorizationManager_1.generateToken({ id: newUser.id });
        res.status(201).send({ message: 'Success!', token });
    }
    catch (error) {
        res.statusCode = 400;
        let message = error.sqlMessage || error.message;
        res.send({ message });
    }
});
exports.signup = signup;
//# sourceMappingURL=signup.js.map