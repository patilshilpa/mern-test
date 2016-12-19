import { Router } from 'express';
//import mailgunjs from 'mailgun-js';
import * as UserController from '../controllers/email.controller';

const router = new Router();

// Get  signup page 
router.route('/Email').post(UserController.addEmails);

export default router;  

