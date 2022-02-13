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
const comment_1 = require("../service/comment");
const router = express_1.Router();
exports.createComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newComment = Object.assign({}, req.body);
    try {
        const post = yield comment_1.create(newComment);
        res.status(http_status_codes_1.default.CREATED).send(post);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ auth: false, message: error });
    }
});
exports.updateComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    let newComment = Object.assign({}, req.body);
    try {
        const post = yield comment_1.update(newComment, Number(id));
        res.status(http_status_codes_1.default.OK).send(post);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error });
    }
});
exports.deleteCommentById = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        const comment = yield comment_1.deleteComment(Number(id));
        res.status(http_status_codes_1.default.OK).send(comment);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error });
    }
});
exports.getCommentsByPostId = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { postId } = req.params;
    try {
        const comments = yield comment_1.getCommentsbyPostId(Number(postId));
        res.status(http_status_codes_1.default.OK).send(comments);
    }
    catch (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
    }
});
//# sourceMappingURL=comment.js.map