import { Router } from 'express';
import { authenticate } from 'passport';
import { googleLogin,facebookLogin } from '../controller/user';

const router: Router = Router();

router.get('/google',authenticate('google',{scope: [ 'profile','email' ]}));
router.get('/google/callback',authenticate('google'),googleLogin);
router.get('/facebook',authenticate('facebook',{scope: [,'email' ]}));
router.get('/facebook/callback',authenticate('facebook'),facebookLogin);
export default router;