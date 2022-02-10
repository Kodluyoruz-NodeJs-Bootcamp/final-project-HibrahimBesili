import { UserPost } from "../entity/post";
import { User } from "../entity/user";

const create = async function (newPost: UserPost) {
     await UserPost.create(newPost).save();
}

const update = async function (post: UserPost, id: number) {
     await UserPost.update(id, { name: post.name, isShared: post.isShared });
}

const deletePost = async function (id: number) {
     await UserPost.delete(id);
}

const getPostsbyUserId = async function (userId: number) {
     return await UserPost.createQueryBuilder("UserPost").where("UserPost.userId = :id", { id: userId }).getMany();
}

const getSharedPostsList = async function () {
     return await User.createQueryBuilder("User")
          .innerJoin("User.posts", "UserPost")
          .select(['User.id', 'User.firstName', 'User.lastName', 'User.userName', "UserPost"])
          .where("UserPost.isShared = :isShared", { isShared: 1 })
          .getMany();
}

const likePostByPostId = async function (postId) {
     let post = await UserPost.findOne(postId);
     post.likeCount++;
     await UserPost.save(post);
}

const sharePostsByPostIds = async function (postIds) {
     await UserPost.createQueryBuilder()
          .update(UserPost)
          .set({ isShared: true })
          .whereInIds(postIds)
          .execute();
}


export { create, update, deletePost, getPostsbyUserId, getSharedPostsList, likePostByPostId, sharePostsByPostIds }