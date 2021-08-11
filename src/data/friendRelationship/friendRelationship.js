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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendRelationshipDatabase = void 0;
const connection_1 = __importDefault(require("../connection"));
class friendRelationshipDatabase {
    constructor() {
        this.tableName = 'labook_friend_relationship';
    }
    create(friendRelationship) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default(this.tableName)
                .insert(friendRelationship);
        });
    }
    delete(friendRelationship) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.default(this.tableName)
                .delete()
                .where({
                fk_follower_id: friendRelationship.fk_follower_id,
                fk_following_id: friendRelationship.fk_following_id
            });
        });
    }
}
exports.friendRelationshipDatabase = friendRelationshipDatabase;
//# sourceMappingURL=friendRelationship.js.map