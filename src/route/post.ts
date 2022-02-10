import { Router } from 'express';
import { createPost,updatePost,deletePostById ,getPostsByUserId,getSharedPosts,likePost,sharePosts } from '../controller/post';
import { createSchema,updateSchema } from "../schema/post";
import validate from "../middlewares/validate";
import * as passport from 'passport';


const router: Router = Router();

// require('../service/passport');
router.post('/',validate(createSchema),createPost);
router.put('/:id',validate(updateSchema),updatePost);
router.delete('/:id',deletePostById);
router.get('/user/:userId',getPostsByUserId);
router.get('/',getSharedPosts);
router.get('/like/:postId',likePost);
router.post('/share/',sharePosts);


export default router;