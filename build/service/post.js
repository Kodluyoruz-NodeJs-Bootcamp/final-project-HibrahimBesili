"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../entity/post");
const create = function (newPost) {
    return __awaiter(this, void 0, void 0, function* () {
        newPost.createdTime = new Date();
        return yield post_1.UserPost.create(newPost).save();
    });
};
exports.create = create;
const update = function (post, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatePost = {
            name: post.name,
            isShared: post.isShared,
        };
        if (post.file) {
            const updatePost = {
                name: post.name,
                isShared: post.isShared,
                imageName: post.file.filename
            };
        }
        return yield post_1.UserPost.update(id, updatePost);
    });
};
exports.update = update;
const deletePost = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield post_1.UserPost.delete(id);
    });
};
exports.deletePost = deletePost;
const getPostsbyUserId = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield post_1.UserPost.createQueryBuilder("UserPost").where("UserPost.userId = :id", { id: userId }).getMany();
    });
};
exports.getPostsbyUserId = getPostsbyUserId;
const getSharedPostsList = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return yield post_1.UserPost.createQueryBuilder("UserPost")
            .innerJoinAndSelect("UserPost.user", "User")
            .where("UserPost.isShared = :isShared", { isShared: 1 })
            .getMany();
    });
};
exports.getSharedPostsList = getSharedPostsList;
const likePostByPostId = function (postId) {
    return __awaiter(this, void 0, void 0, function* () {
        let post = yield post_1.UserPost.findOne(postId);
        post.likeCount++;
        yield post_1.UserPost.save(post);
    });
};
exports.likePostByPostId = likePostByPostId;
const sharePostsByPostIds = function (postIds) {
    return __awaiter(this, void 0, void 0, function* () {
        yield post_1.UserPost.createQueryBuilder()
            .update(post_1.UserPost)
            .set({ isShared: true })
            .whereInIds(postIds)
            .execute();
    });
};
exports.sharePostsByPostIds = sharePostsByPostIds;
//# sourceMappingURL=post.js.map