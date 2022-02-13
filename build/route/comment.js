"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_1 = require("../controller/comment");
const comment_2 = require("../schema/comment");
const validate_1 = __importDefault(require("../middlewares/validate"));
const passport_1 = require("passport");
const router = express_1.Router();
const auth = passport_1.authenticate('jwt', { session: false });
router.post('/', auth, validate_1.default(comment_2.createSchema), comment_1.createComment);
router.put('/:id', auth, validate_1.default(comment_2.updateSchema), comment_1.updateComment);
router.delete('/:id', auth, comment_1.deleteCommentById);
router.get('/:postId', auth, comment_1.getCommentsByPostId);
exports.default = router;
//# sourceMappingURL=comment.js.map