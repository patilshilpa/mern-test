import Signup from '../models/signup';
import cuid from 'cuid';
import jwt from 'jsonwebtoken';
import serverConfig from '../config';
import md5 from 'md5'; 

/**
 * Get a single data
 * @param req
 * @param res
 * @returns void
 */


export function getlogin(req, res) {
	
  Signup.findOne({email: req.body.login.email}).exec((err,data) => {
    if (err) {
      res.status(500).send(err);
    }
    if(data == null) {
    	res.json({
        login:{ 
          success: false, 
          message: 'Authentication failed. User not found.'
          }
        }); //  Error message if the user does find 
     } else {
     	if (data.Password != md5(req.body.login.Password)){
     		res.json ({login:{sucess:false, message:'Authentication failed. Wrong password.'}}); //compare the password of sent form cline t to server 
     	} else{
     		console.log("get a token is :",serverConfig.secret);
     	  let token = jwt.sign(data,serverConfig.secret); // generting a  token 
     		res.json({
          login:{ 
       		 	success:true,
       			message:'Enjoy your token',
       			token:token
       		}
     		});
     	}
    }
  });
}




  /* res.json({login });
    console.log("getlogin",login);
*/ 