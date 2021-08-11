"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPostTypes = exports.POST_TYPES = void 0;
var POST_TYPES;
(function (POST_TYPES) {
    POST_TYPES["NORMAL"] = "normal";
    POST_TYPES["EVENT"] = "event";
})(POST_TYPES = exports.POST_TYPES || (exports.POST_TYPES = {}));
const toPostTypes = (type) => {
    switch (type) {
        case 'NORMAL':
            return POST_TYPES.NORMAL;
        case 'EVENT':
            return POST_TYPES.EVENT;
        default:
            return POST_TYPES.NORMAL;
    }
};
exports.toPostTypes = toPostTypes;
//# sourceMappingURL=post.js.map