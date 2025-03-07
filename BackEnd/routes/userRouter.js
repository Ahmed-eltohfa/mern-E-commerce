import express from 'express';
import { loginUser, registerUser, adminLogin, isLoggedIn } from '../controllers/userController.js';
import userAuth from '../middlewares/userAuth.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/admin', adminLogin);
userRouter.post('/isLogged', userAuth, isLoggedIn);

export default userRouter;