"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const create_1 = require("../controller/post/create");
const getById_1 = require("../controller/post/getById");
exports.postRouter = express_1.default.Router();
exports.postRouter.post('/create', create_1.create);
exports.postRouter.get('/:id', getById_1.getById);
//# sourceMappingURL=postRouter.js.map