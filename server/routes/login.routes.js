import { Router } from 'express';
//import mailgunjs from 'mailgun-js';
import * as UserController from '../controllers/login.controller';

const router = new Router();

// Get  signup page 
router.route('/login').post(UserController.getlogin);


export default router;  
