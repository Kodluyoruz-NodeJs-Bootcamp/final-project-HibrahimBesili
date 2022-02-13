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
require("reflect-metadata");
const comment_1 = require("../entity/comment");
const create = function (newComment) {
    return __awaiter(this, void 0, void 0, function* () {
        newComment.createdTime = new Date();
        yield comment_1.Comment.create(newComment).save();
    });
};
exports.create = create;
const update = function (comment, id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield comment_1.Comment.update(id, { comment: comment.comment });
    });
};
exports.update = update;
const deleteComment = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield comment_1.Comment.delete(id);
    });
};
exports.deleteComment = deleteComment;
const getCommentsbyPostId = function (postId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield comment_1.Comment.createQueryBuilder("Comment")
            .innerJoin("Comment.user", "User")
            .select(['User.id', 'User.email', "Comment"])
            .where("Comment.userPostId = :id", { id: postId })
            .getMany();
    });
};
exports.getCommentsbyPostId = getCommentsbyPostId;
//# sourceMappingURL=comment.js.map