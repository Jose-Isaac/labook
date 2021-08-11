"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.generateHash = void 0;
const bcryptjs_1 = require("bcryptjs");
const generateHash = (plainText) => {
    const salt = bcryptjs_1.genSaltSync(12);
    return bcryptjs_1.hashSync(plainText, salt);
};
exports.generateHash = generateHash;
const compareHash = (plainText, hash) => {
    return bcryptjs_1.compareSync(plainText, hash);
};
exports.compareHash = compareHash;
//# sourceMappingURL=hashManager.js.map