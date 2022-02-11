import { Router } from 'express';
import { createPost,updatePost,deletePostById ,getPostsByUserId,getSharedPosts,likePost,sharePosts } from '../controller/post';
import { createSchema,updateSchema } from "../schema/post";
import validate from "../middlewares/validate";
import { authenticate } from 'passport';


const router: Router = Router();

const auth = authenticate('jwt',{ session: false });

router.post('/',auth,validate(createSchema),createPost);
router.put('/:id',auth,validate(updateSchema),updatePost);
router.delete('/:id',auth,deletePostById);
router.get('/user/:userId',auth,getPostsByUserId);
router.get('/',auth,getSharedPosts);
router.get('/like/:postId',auth,likePost);
router.post('/share/',auth,sharePosts);


export default router;