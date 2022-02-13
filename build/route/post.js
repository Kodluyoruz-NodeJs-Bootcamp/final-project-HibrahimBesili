"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controller/post");
const post_2 = require("../schema/post");
const validate_1 = __importDefault(require("../middlewares/validate"));
const passport_1 = require("passport");
const uploadPhoto = require('../service/upload');
const router = express_1.Router();
const auth = passport_1.authenticate('jwt', { session: false });
router.post('/', auth, validate_1.default(post_2.createSchema), uploadPhoto.single('image'), post_1.createPost);
router.put('/:id', auth, validate_1.default(post_2.updateSchema), uploadPhoto.single('image'), post_1.updatePost);
router.delete('/:id', auth, post_1.deletePostById);
router.get('/user/:userId', auth, post_1.getPostsByUserId);
router.get('/', auth, post_1.getSharedPosts);
router.get('/like/:postId', auth, post_1.likePost);
router.post('/share/', auth, post_1.sharePosts);
exports.default = router;
//# sourceMappingURL=post.js.map