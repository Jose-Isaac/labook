"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const follow_1 = require("../controller/friendRelationship/follow");
const unfollow_1 = require("../controller/friendRelationship/unfollow");
const login_1 = require("../controller/user/login");
const signup_1 = require("../controller/user/signup");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/signup', signup_1.signup);
exports.userRouter.post('/login', login_1.login);
exports.userRouter.put('/follow/:id', follow_1.follow);
exports.userRouter.put('/unfollow/:id', unfollow_1.unFollow);
//# sourceMappingURL=userRouter.js.map