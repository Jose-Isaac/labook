"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.generateId = void 0;
const uuid_1 = require("uuid");
const generateId = () => {
    return uuid_1.v4();
};
exports.generateId = generateId;
const validateId = (id) => {
    return uuid_1.validate(id);
};
exports.validateId = validateId;
//# sourceMappingURL=idManager.js.map