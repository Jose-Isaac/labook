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
exports.createBusiness = void 0;
const post_1 = require("./../../data/post/post");
const post_2 = require("../../model/post");
const authorizationManager_1 = require("../../services/authorizationManager");
const idManager_1 = require("../../services/idManager");
const createBusiness = (post, token) => __awaiter(void 0, void 0, void 0, function* () {
    const { photo, description, type } = post;
    if (!photo || !description || !type) {
        throw new Error('"photo" and "description" and "type" must be provided');
    }
    const tokenData = authorizationManager_1.getTokenData(token);
    const newPost = {
        id: idManager_1.generateId(),
        photo,
        description,
        type: post_2.toPostTypes(type),
        created_at: new Date()
            .toLocaleDateString()
            .split('/')
            .reverse()
            .join('-'),
        author_id: tokenData.id
    };
    yield new post_1.PostDatabase().create(newPost);
});
exports.createBusiness = createBusiness;
//# sourceMappingURL=createBusiness.js.map