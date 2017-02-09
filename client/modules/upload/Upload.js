import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'; 
import {UPLOAD_DOCUMENT_SUCCESS, uploadDocumentRequest} from './UploadAction';
import isServer from 'detect-node';
import Promise from 'bluebird';

const FileAPI = !isServer ? Promise.promisifyAll(require('fileapi')) : null;


class FileUpload extends Component {  // Creating a component 
  constructor(props) {   // pass the data
  	super(props);

     /* this.state = {
      file: '',
      url:'',
      name:'',

    }*/

     this.handleFileUpload =  this.handleFileUpload.bind(this);
  }

  handleFileUpload(e) {

        let reader = new FileReader();
        let file = e.target.files[0];
       console.log("file data",file);
       reader.onload = function(newImage) {
        //console.log("log of data", newImage.target.result);
        /*let imageData = newImage.target.result;
        console.log("imageData",imageData)*/
        let url = "/api/upload";
        console.log("url",url);
       
        let data = {
           filename: file.name,
           filetype: file.type
        };
         console.log("data",data);


        FileAPI.upload({
        url,
        data,
        complete:function(err,res) {
          if(err) {
            console.log("err---",err);
          } else {
            console.log('console',res);

          }
        }
      });
      
     }.bind(this);
     reader.readAsDataURL(file);
     //console.log("readAsDataURLfrom",file);


  }
  


render () {
	return (
		  <div>
	     <h1> hello</h1>
	     <input type="file" onChange={this.handleFileUpload} ref ="file"/><br/><br/>
	      <input type="submit" />
      </div>
		);
}
}


export default FileUpload;
