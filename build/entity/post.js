"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const comment_1 = require("./comment");
const user_1 = require("./user");
let UserPost = class UserPost extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserPost.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], UserPost.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], UserPost.prototype, "likeCount", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], UserPost.prototype, "commentCount", void 0);
__decorate([
    typeorm_1.Column({ default: "../upload/posts/default.png" }),
    __metadata("design:type", String)
], UserPost.prototype, "imageName", void 0);
__decorate([
    typeorm_1.Column('int', { nullable: true }),
    __metadata("design:type", Number)
], UserPost.prototype, "typeId", void 0);
__decorate([
    typeorm_1.Column("bool"),
    __metadata("design:type", Boolean)
], UserPost.prototype, "isShared", void 0);
__decorate([
    typeorm_1.Column('date', { nullable: true }),
    __metadata("design:type", Date)
], UserPost.prototype, "createdTime", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_1.User, user => user.posts),
    __metadata("design:type", user_1.User)
], UserPost.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, comments => comments.userPost),
    __metadata("design:type", Array)
], UserPost.prototype, "comments", void 0);
UserPost = __decorate([
    typeorm_1.Entity()
], UserPost);
exports.UserPost = UserPost;
//# sourceMappingURL=post.js.map