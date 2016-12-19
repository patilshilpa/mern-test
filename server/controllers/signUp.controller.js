
import Signup from '../models/signup';
import sanitizeHtml from 'sanitize-html';
import mailgunjs from 'mailgun-js';
import md5 from 'md5'; 


export function addsignup(req, res) {
  console.log("request",req.body);
  if (!req.body.user.name || !req.body.user.email || !req.body.user.phoneno || !req.body.user.Password ) {
    res.status(403).end();
  }
  Signup.findOne({"email": req.body.user.email}, function(err,data) {
    if (err) {
      res.status(500).send(err);
    } else if(data){
      res.json({user:{success:false, message:'user already registered'}})
    } else {
      const newsignup = new Signup(req.body.user);
      console.log("newsignup",newsignup);

      // Let's sanitize inputs
      let password = md5(req.body.user.Password);
      newsignup.name = sanitizeHtml(newsignup.name);
      newsignup.email = sanitizeHtml(newsignup.email);
      newsignup.phoneno = sanitizeHtml(newsignup.phoneno);
      newsignup.Password  = sanitizeHtml(password);

      console.log("called ",newsignup);
      
      


     // newsignup.cuid = cuid();
      newsignup.save((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }
      res.json({
              user:{ 
                success:true,
                message:'register successfully',
               
              }
            });
      });
    }
  })
}


// var api_key = 'key-836adad29c6858e8ea3c8cc48e55fe6d';
//       var domain = 'sandboxa8a84235e3284aecb2b1012e39e1bf84.mailgun.org';
      
//       var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//       console.log("coming inside");
     
//       var data = {
//         from: 'Mailgun Sandbox <postmaster@sandboxa8a84235e3284aecb2b1012e39e1bf84.mailgun.org>',
//          to: "shilpap719@gmail.com",
//         subject: '<p>hello<p/>',
//         text:  'Congrats',
//         html: "<p>Your approval has been send to the admin. Please wait for the enrollment mail<br><br>Kind Regards<br><br>The peoplecare Team<p/>"
//       };
 
//       mailgun.messages().send(data, function (error, body) {
//         console.log("messages",body);
//             if(!error){
//              console.log("ok");
//           }
//              else{
//             console.log("not ok",error);
//             }
//       });




//res.json({ user: saved });



