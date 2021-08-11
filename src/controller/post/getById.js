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
exports.getById = void 0;
const getByIdBusiness_1 = require("./../../business/post/getByIdBusiness");
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield getByIdBusiness_1.getByIdBusiness(id);
        res.status(200).send({ message: 'Success', post });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
});
exports.getById = getById;
//# sourceMappingURL=getById.js.map