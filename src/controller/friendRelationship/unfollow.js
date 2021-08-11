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
exports.unFollow = void 0;
const unFollowBusiness_1 = require("../../business/friendRelationship/unFollowBusiness");
const unFollow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const token = req.headers.authorization;
        const friendRelationship = {
            fk_following_id: id,
            token
        };
        yield unFollowBusiness_1.unFollowBusiness(friendRelationship);
        res.send({ message: 'Success!' });
    }
    catch (error) {
        if (error.sqlMessage && error.sqlMessage.includes('a foreign key constraint fails')) {
            res.status(404).send({ message: 'friend to follow not found' });
        }
        if (res.statusCode === 200) {
            res.send({ message: error.message || error.sqlMessage });
        }
    }
});
exports.unFollow = unFollow;
//# sourceMappingURL=unfollow.js.map