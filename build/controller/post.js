"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const post_1 = require("../service/post");
const router = express_1.Router();
exports.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newPost = Object.assign({}, req.body);
    newPost.user = req["user"].id;
    try {
        const post = yield post_1.create(newPost);
        res.status(http_status_codes_1.default.CREATED).send(post);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ auth: false, message: error });
    }
});
exports.updatePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    let newPost = Object.assign({}, req.body);
    try {
        const post = yield post_1.update(newPost, Number(id));
        res.status(http_status_codes_1.default.OK).send(post);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error });
    }
});
exports.deletePostById = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        const post = yield post_1.deletePost(Number(id));
        res.status(http_status_codes_1.default.OK).send(post);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error });
    }
});
exports.getPostsByUserId = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const posts = yield post_1.getPostsbyUserId(req["user"].id);
        res.status(http_status_codes_1.default.OK).send(posts);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error });
    }
});
exports.getSharedPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const posts = yield post_1.getSharedPostsList();
        res.status(http_status_codes_1.default.OK).send(posts);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
    }
});
exports.likePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { postId } = req.params;
    try {
        const post = yield post_1.likePostByPostId(postId);
        res.status(http_status_codes_1.default.OK).send(post);
        ;
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
    }
});
exports.sharePosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let postIds = Object.assign({}, req.body);
    try {
        const post = yield post_1.sharePostsByPostIds(postIds);
        res.status(http_status_codes_1.default.OK).send(post);
        ;
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
    }
});
//# sourceMappingURL=post.js.map