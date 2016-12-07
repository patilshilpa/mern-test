import { Router } from 'express';
//import mailgunjs from 'mailgun-js';
import * as UserController from '../controllers/signUp.controller';

const router = new Router();

// Get all Posts
router.route('/signUp').post(UserController.addsignup);
//router.route('/signUp').post(UserController.SendEmail);

export default router;  
