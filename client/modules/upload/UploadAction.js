
import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';



// Export Constants
export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const  UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL'


//Export Actions
export function uploadSuccess(data) {
  return {
    type: UPLOAD_DOCUMENT_SUCCESS,
    data,
  };
}

export function uploadDocumentRequest(data) {
  return (dispatch) => {
    return callApi('upload','post', {
      data: {
       
      },
    }).then(res => dispatch(uploadSuccess(res.data)));
       
  }
}







/*

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

export function uploadDocumentRequest({ file, name }) { 
console.log(" hi"); 
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  return (dispatch) => {
    axios.post('/files', data)
      .then(response => dispatch(uploadSuccess(response))
      .catch(error => dispatch(uploadFail(error));
  };
}


*/