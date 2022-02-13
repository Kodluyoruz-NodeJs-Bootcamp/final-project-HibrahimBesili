"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharePosts = exports.likePost = exports.getSharedPosts = exports.getPostsByUserId = exports.deletePostById = exports.updatePost = exports.createPost = void 0;
var express_1 = require("express");
var http_status_codes_1 = require("http-status-codes");
var post_1 = require("../service/post");
var router = (0, express_1.Router)();
var createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newPost, post, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newPost = __assign({}, req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.create)(newPost)];
            case 2:
                post = _a.sent();
                res.status(http_status_codes_1.default.CREATED).send(post);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ auth: false, message: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createPost = createPost;
var updatePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newPost, post, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                newPost = __assign({}, req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.update)(newPost, Number(id))];
            case 2:
                post = _a.sent();
                res.status(http_status_codes_1.default.OK).send(post);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatePost = updatePost;
var deletePostById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.deletePost)(Number(id))];
            case 2:
                post = _a.sent();
                res.status(http_status_codes_1.default.OK).send(post);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error_3 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deletePostById = deletePostById;
var getPostsByUserId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, posts, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.getPostsbyUserId)(Number(userId))];
            case 2:
                posts = _a.sent();
                res.status(http_status_codes_1.default.OK).send(posts);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: error_4 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPostsByUserId = getPostsByUserId;
var getSharedPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, post_1.getSharedPostsList)()];
            case 1:
                posts = _a.sent();
                res.status(http_status_codes_1.default.OK).send(posts);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSharedPosts = getSharedPosts;
var likePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, post, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postId = req.params.postId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.likePostByPostId)(postId)];
            case 2:
                post = _a.sent();
                res.status(http_status_codes_1.default.OK).send(post);
                ;
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.likePost = likePost;
var sharePosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var postIds, post, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postIds = __assign({}, req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, post_1.sharePostsByPostIds)(postIds)];
            case 2:
                post = _a.sent();
                res.status(http_status_codes_1.default.OK).send(post);
                ;
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                res.status(http_status_codes_1.default.BAD_REQUEST).json({ message: "error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.sharePosts = sharePosts;
//# sourceMappingURL=post.js.map