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
exports.create = void 0;
const createBusiness_1 = require("../../business/post/createBusiness");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { photo, description, type } = req.body;
        const token = req.headers.authorization;
        yield createBusiness_1.createBusiness({ photo, description, type }, token);
        res.status(201).send({ message: 'Success' });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
});
exports.create = create;
//# sourceMappingURL=create.js.map