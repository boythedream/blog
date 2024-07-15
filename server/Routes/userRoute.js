import express from 'express'
import { allUserController, loginController, registerController } from '../controllers/userController.js';

const router = express.Router();
//get all user
router.get('/all-user', allUserController)
//get all user
router.post('/register', registerController)
//get all user
router.post('/login', loginController)

export default router;