import { Router } from 'express';
//import mailgunjs from 'mailgun-js';
import * as UserController from '../controllers/signUp.controller';

const router = new Router();

// Get  signup page 
router.route('/signUp').post(UserController.addsignup);


export default router;  
