import { Router } from 'express';
import { createComment, updateComment, deleteCommentById, getCommentsByPostId} from '../controller/comment';
import { createSchema,updateSchema } from "../schema/comment";
import validate from "../middlewares/validate";
import * as passport from 'passport';

const router: Router = Router();

// require('../service/passport');
router.post('/',validate(createSchema),createComment);
router.put('/:id',validate(updateSchema),updateComment);
router.delete('/:id',deleteCommentById);
router.get('/:postId',getCommentsByPostId);


export default router;