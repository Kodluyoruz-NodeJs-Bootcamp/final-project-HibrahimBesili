import { Router } from 'express';
import { createUser,login } from '../controller/user';
import { registerSchema,loginSchema } from "../schema/user";
import validate from "../middlewares/validate";

const router: Router = Router();

router.post('/register',validate(registerSchema),createUser);
router.post('/login',validate(loginSchema),login);

export default router;