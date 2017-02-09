
/*import { fileUpload } from "express-fileupload";
import Upload from '../models/Upload';
import express from 'express';
const  app = express();
*/

/*app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
*/
/*export function UploadFile (req,res){
	console.log("UploadFile",req.body);*/
/*	var file ;
	 if(!req.file){
	 	console.log("File was not found");
	 	return;
	 }
	 file = req.file.FormFieldName;*/

}


// default options 
/*app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  var sampleFile;
 
  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send('File uploaded!');
    }
  });
});
*/





/*
app.post("/upload", function(req, res)
{
    var file;

    if(!req.files)
    {
        res.send("File was not found");
        return;
    }

    file = req.files.FormFieldName;  // here is the field name of the form

    file.mv("file.txt", function(err)  //Obvious Move function
        {
              // log your error
        });

    res.send("File Uploaded");


});
*/


/*import Upload from '../models/Upload';
import sanitizeHtml from 'sanitize-html';
import read-file from 'read-file'

export function UploadFile(req,res){
	console.log("UploadFile",req.body);

fs.readFile(req.files.displayImage.path, function (err, data) {
  var newPath = __dirname + "/uploads/uploadedFileName";
  fs.writeFile(newPath, data, function (err) {
    res.redirect("back");
  });
});
}*/

