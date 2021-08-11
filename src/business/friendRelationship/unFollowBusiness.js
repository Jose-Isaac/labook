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
exports.unFollowBusiness = void 0;
const friendRelationship_1 = require("../../data/friendRelationship/friendRelationship");
const authorizationManager_1 = require("../../services/authorizationManager");
const unFollowBusiness = (friendRelationship) => __awaiter(void 0, void 0, void 0, function* () {
    const { fk_following_id, token } = friendRelationship;
    if (!fk_following_id || !token) {
        throw new Error('user to follow id and token must be provided');
    }
    const tokenData = authorizationManager_1.getTokenData(token);
    const relationship = {
        fk_follower_id: tokenData.id,
        fk_following_id
    };
    const result = yield new friendRelationship_1.friendRelationshipDatabase().delete(relationship);
    if (!result) {
        throw new Error('Sorry, your is not friend this user');
    }
});
exports.unFollowBusiness = unFollowBusiness;
//# sourceMappingURL=unFollowBusiness.js.map