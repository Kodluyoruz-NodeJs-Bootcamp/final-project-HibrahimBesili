import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import { create, update, deletePost, getPostsbyUserId, getSharedPostsList, likePostByPostId,sharePostsByPostIds } from "../service/post"

const router: Router = Router();

export const createPost = async (req: Request, res: Response) => {

  const newPost = { ...req.body };

  newPost.user = req["user"].id;

  try {
    const post = await create(newPost);
    res.status(HttpStatusCodes.CREATED).send(post);
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ auth: false, message: error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  let { id } = req.params;
  let newPost = { ...req.body };

  try {
    const post = await update(newPost, Number(id));
    res.status(HttpStatusCodes.OK).send(post);
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
  }
};

export const deletePostById = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    const post = await deletePost(Number(id));
    res.status(HttpStatusCodes.OK).send(post);
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
  }
};

export const getPostsByUserId = async (req: Request, res: Response) => {

  try {
    const posts = await getPostsbyUserId(req["user"].id)
    res.status(HttpStatusCodes.OK).send(posts);
  }
  catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
  }

};

export const getSharedPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getSharedPostsList();
    res.status(HttpStatusCodes.OK).send(posts);
  }
  catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "error" });
  }

};

export const likePost = async (req: Request, res: Response) => {
  let { postId } = req.params
  try {
    const post = await likePostByPostId(postId);
    res.status(HttpStatusCodes.OK).send(post);;
  }
  catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "error" });
  }

};


export const sharePosts = async (req: Request, res: Response) => {
  let  postIds  = {...req.body}

  try {
    const post = await sharePostsByPostIds(postIds);
    res.status(HttpStatusCodes.OK).send(post);;
  }
  catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "error" });
  }

};
