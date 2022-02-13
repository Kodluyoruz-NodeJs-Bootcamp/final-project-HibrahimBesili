import "reflect-metadata"
import { Comment } from "../entity/comment";

const create = async function (newComment: Comment) {
    newComment.createdTime = new Date();
    await Comment.create(newComment).save();
}

const update = async function (comment: Comment, id: number) {
    await Comment.update(id, { comment: comment.comment });
}

const deleteComment = async function (id: number) {
    await Comment.delete(id);
}

const getCommentsbyPostId = async function (postId: number) {
    return await Comment.createQueryBuilder("Comment")
        .innerJoin("Comment.user", "User")
        .select(['User.id', 'User.email', "Comment"])
        .where("Comment.userPostId = :id", { id: postId })
        .getMany();
}

export { create, update, deleteComment, getCommentsbyPostId }