
import Emails from '../models/Emails';
import sanitizeHtml from 'sanitize-html';
import mailgunjs from 'mailgun-js';


export function addEmails(req, res,data) {
  console.log("request",req.body);
   if (!req.body.EmailDetails.to || !req.body.EmailDetails.sub || !req.body.EmailDetails.message) {
    res.status(403).end();
  }
  const newEmails= new Emails(req.body.EmailDetails);
  console.log("newEmails",newEmails);

  // Let's sanitize inputs
  newEmails.to = sanitizeHtml(newEmails.to);
  newEmails.sub = sanitizeHtml(newEmails.sub);
  newEmails.message = sanitizeHtml(newEmails.message);

  console.log("called ",newEmails);
  
  var api_key = 'key-836adad29c6858e8ea3c8cc48e55fe6d';
  var domain = 'sandboxa8a84235e3284aecb2b1012e39e1bf84.mailgun.org';
  //process.env.MAIL_URL = 'smtp://postmaster@sandbox9f183cb6f7764f7db6fc30618417f767.mailgun.org:peoplelink@smtp.mailgun.org:587';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  console.log("coming inside");
 
  var data = {
    from: 'Mailgun Sandbox <postmaster@sandboxa8a84235e3284aecb2b1012e39e1bf84.mailgun.org>',
     to: "shilpap719@gmail.com",
    subject: '<p>hello<p/>',
    text:  'Congrats',
    html: "<p>Your approval has been send to the admin. Please wait for the enrollment mail<br><br>Kind Regards<br><br>The peoplecare Team<p/>"
  };
 
mailgun.messages().send(data, function (error, body) {
  console.log("messages",body);
      if(!error){
       console.log("ok");
    }
       else{
      console.log("not ok",error);
      }
});

  newEmails.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }else {
        res.json({
              EmailDetails:{ 
                success:true,
                message:'Email sent successfully',
               
              }
            });
      }
       });
}
