"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var comment_1 = require("../controller/comment");
var comment_2 = require("../schema/comment");
var validate_1 = __importDefault(require("../middlewares/validate"));
var passport_1 = require("passport");
var router = (0, express_1.Router)();
var auth = (0, passport_1.authenticate)('jwt', { session: false });
router.post('/', auth, (0, validate_1.default)(comment_2.createSchema), comment_1.createComment);
router.put('/:id', auth, (0, validate_1.default)(comment_2.updateSchema), comment_1.updateComment);
router.delete('/:id', auth, comment_1.deleteCommentById);
router.get('/:postId', auth, comment_1.getCommentsByPostId);
exports.default = router;
//# sourceMappingURL=comment.js.map