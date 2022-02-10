import { Comment } from "../entity/comment";

const create = async function (newComment: Comment) {
    await Comment.create(Comment).save();
}

const update = async function (comment: Comment, id: number) {
    await Comment.update(id, { comment: comment.comment });
}

const deleteComment = async function (id: number) {
    await Comment.delete(id);
}

const getCommentsbyPostId = async function (commentId: number) {
    return await Comment.createQueryBuilder("Comment")
        .where("Comment.postId = :id", { id: commentId })
        .getMany();
}

export { create, update, deleteComment, getCommentsbyPostId }