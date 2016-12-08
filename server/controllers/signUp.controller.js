
import Signup from '../models/signup';
import sanitizeHtml from 'sanitize-html';
import mailgunjs from 'mailgun-js';


export function addsignup(req, res) {
  console.log("request",req.body);
  if (!req.body.user.name || !req.body.user.email || !req.body.user.phoneno || !req.body.user.Password ) {
    res.status(403).end();
  }
  const newsignup = new Signup(req.body.user);
  console.log("newsignup",newsignup);


  // Let's sanitize inputs
  newsignup.name = sanitizeHtml(newsignup.name);
  newsignup.email = sanitizeHtml(newsignup.email);
  newsignup.phoneno = sanitizeHtml(newsignup.phoneno);
  newsignup.Password  = sanitizeHtml(newsignup.Password);

  console.log("called ",newsignup);
  
  var api_key = 'key-62eec1607aff8b69784dacfae6fe3604';
  var domain = 'sandbox9f183cb6f7764f7db6fc30618417f767.mailgun.org';
  process.env.MAIL_URL = 'smtp://postmaster@sandbox9f183cb6f7764f7db6fc30618417f767.mailgun.org:peoplelink@smtp.mailgun.org:587';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  console.log("coming inside");
 
  var data = {
    from: 'Mailgun Sandbox <postmaster@sandbox64c3a6cf82324e8097c61d7b5bea5384.mailgun.org>',
    to: 'patilshilpa.mail@gmail.com',
    subject: 'Hello',
    text:  'Congrats'
  };
 
mailgun.messages().send(data, function (error, body) {
  console.log("adss",body);
      if(!error){
       console.log("ok");
    }
       else{
      console.log("not ok",error);
      }
});

 // newsignup.cuid = cuid();
  newsignup.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}







/*import Signups from '../models/signup';
import sanitizeHtml from 'sanitize-html';*/

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
/*export function addsignup(req, res) {
  if (!req.body.user.name || !req.body.user.email || !req.body.user.phoneno) {
    res.status(403).end();
  }

  const newsignup = new Signups(req.body.user);
  console.log("add-sign",newsignup);

  // Let's sanitize inputs
  newsignup.name = sanitizeHtml(newsignup.name);
  newsignup.email = sanitizeHtml(newsignup.email);
  newsignup.phoneno = sanitizeHtml(newsignup.phoneno);
  console.log("newsignup",newsignup);


  newsignup.save((err, saved) => {
    console.log("working");
    if (err) {
      console.log("error",err)
      res.status(500).send(err);
      console.log("data",err);
    }
    res.json({ user: saved });
  });
}
*/
