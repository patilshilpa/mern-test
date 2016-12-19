
import {add_Email } from './EmailActions';

// Initial State
const initialStates = {
   isSend : "True",
   isSent : "False",
   isFailed : "False"
}

const EmailReducer = (state = initialStates, action) => {
  switch (action.type) {
    case add_Email:
      return Object.assign({}, state, {
           isSend : "False",
           isSent : "True",
           isFailed : "False",
           data: action.EmailDetails
      })
    default:
      return state;
  }
}


export default EmailReducer