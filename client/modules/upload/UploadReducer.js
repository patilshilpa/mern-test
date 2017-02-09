import {UPLOAD_DOCUMENT_SUCCESS } from './UploadAction';




// Initial State
const initialState = {
   isUploading : "True",
   isUploaded : "False",
   isuploadedFailed : "False"
}

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_DOCUMENT_SUCCESS :
      return Object.assign({}, state, {
        isUploading : "False",
        isUploaded : "True",
        isuploadedFailed : "False",
        data: action.data
      })

    default:
      return state;
  }
}


export default UploadReducer






