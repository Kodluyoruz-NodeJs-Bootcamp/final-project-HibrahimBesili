import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import { create, update, deleteComment, getCommentsbyPostId } from "../service/comment"

const router: Router = Router();

export const createComment = async (req: Request, res: Response) => {

    const newComment = { ...req.body };
  
    try {
      const post = await create(newComment);
      res.status(HttpStatusCodes.CREATED).send(post);
    } catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).json({ auth: false, message: error });
    }
  };

  export const updateComment = async (req: Request, res: Response) => {
    let { id } = req.params;
    let newComment = { ...req.body };
  
    try {
      const post = await update(newComment, id);
      res.status(HttpStatusCodes.OK).send(post);
    } catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
    }
  };

  export const deleteCommentById = async (req: Request, res: Response) => {
    let { id } = req.params;
    try {
      const comment = await deleteComment(id);
      res.status(HttpStatusCodes.OK).send(comment);
    } catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
    }
  };

  export const getCommentsByPostId = async (req: Request, res: Response) => {
    let { postId } = req.params
    try {
      const comments = await getCommentsbyPostId(postId)
      res.status(HttpStatusCodes.OK).send(comments);
    }
    catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "error" });
    }
  
  };