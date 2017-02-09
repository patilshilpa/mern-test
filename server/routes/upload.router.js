import { Router } from 'express';
//import * as  UploadController from '../controllers/upload.contoller';
import fileUpload  from "express-fileupload";
//import {fileupload } from 'fileupload';
import Upload from '../models/Upload';
import fs from 'fs';
 
const router = new Router();

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))

router.post('/upload', function(req, res,data, url) {
   console.log("hi coming in side",req.file);
   let path = process.env.PWD + '/upload';
   console.log("path",path);
   //let newImage =  
 /*    fs.readFile(req.files.displayImage.path, function (err, data) {*/
     fs.writeFile(path, fileUpload, function (err,doc) {
    console.log("coming in this",doc);
  });
});
//});



export default router;  

