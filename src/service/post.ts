import { UserPost } from "../entity/post";

const create = async function (newPost: UserPost) {
     newPost.createdTime = new Date();
     return await UserPost.create(newPost).save();
}

const update = async function (post, id: number) {
     const updatePost  = {
          name : post.name,
          isShared : post.isShared,
     }

     if(post.file){
          const updatePost  = {
               name : post.name,
               isShared : post.isShared,
               imageName : post.imageName
          }
     }

     return await UserPost.update(id,updatePost);
}

const deletePost = async function (id: number) {
     await UserPost.delete(id);
}

const getPostsbyUserId = async function (userId: number) {
     return await UserPost.createQueryBuilder("UserPost").where("UserPost.userId = :id", { id: userId }).getMany();
}

const getSharedPostsList = async function () {
     return await UserPost.createQueryBuilder("UserPost")
          .innerJoinAndSelect("UserPost.user", "User")
          .where("UserPost.isShared = :isShared", { isShared: 1 })
          .getMany();
}

const likePostByPostId = async function (postId) {
     let post = await UserPost.findOne(postId);
     post.likeCount++;
     await UserPost.save(post);
}

const sharePostByPostId = async function (postId) {
     let post = await UserPost.findOne(postId);
     post.isShared = true;
     await UserPost.save(post);
}


export { create, update, deletePost, getPostsbyUserId, getSharedPostsList, likePostByPostId, sharePostByPostId }