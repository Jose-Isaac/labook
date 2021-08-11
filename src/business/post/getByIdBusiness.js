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
exports.getByIdBusiness = void 0;
const post_1 = require("../../data/post/post");
const getByIdBusiness = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryResult = yield new post_1.PostDatabase().findById(id);
    if (!queryResult[0]) {
        throw new Error("Post not found");
    }
    const post = {
        id: queryResult[0].id,
        photo: queryResult[0].photo,
        description: queryResult[0].description,
        type: queryResult[0].type,
        createdAt: queryResult[0].created_at,
        authorId: queryResult[0].author_id,
    };
    return post;
});
exports.getByIdBusiness = getByIdBusiness;
//# sourceMappingURL=getByIdBusiness.js.map