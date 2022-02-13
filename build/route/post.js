"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var post_1 = require("../controller/post");
var post_2 = require("../schema/post");
var validate_1 = require("../middlewares/validate");
var passport_1 = require("passport");
var uploadPhoto = require('../service/upload');
var router = (0, express_1.Router)();
var auth = (0, passport_1.authenticate)('jwt', { session: false });
router.post('/', auth, (0, validate_1.default)(post_2.createSchema), uploadPhoto.single('image'), post_1.createPost);
router.put('/:id', auth, (0, validate_1.default)(post_2.updateSchema), uploadPhoto.single('image'), post_1.updatePost);
router.delete('/:id', auth, post_1.deletePostById);
router.get('/user/:userId', auth, post_1.getPostsByUserId);
router.get('/', auth, post_1.getSharedPosts);
router.get('/like/:postId', auth, post_1.likePost);
router.post('/share/', auth, post_1.sharePosts);
exports.default = router;
//# sourceMappingURL=post.js.map