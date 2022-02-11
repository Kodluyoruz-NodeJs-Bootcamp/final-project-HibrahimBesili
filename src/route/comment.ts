import { Router } from 'express';
import { createComment, updateComment, deleteCommentById, getCommentsByPostId} from '../controller/comment';
import { createSchema,updateSchema } from "../schema/comment";
import validate from "../middlewares/validate";
import { authenticate } from 'passport';

const router: Router = Router();

const auth = authenticate('jwt',{ session: false });

router.post('/',auth,validate(createSchema),createComment);
router.put('/:id',auth,validate(updateSchema),updateComment);
router.delete('/:id',auth,deleteCommentById);
router.get('/:postId',auth,getCommentsByPostId);


export default router;