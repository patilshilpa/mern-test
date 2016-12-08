
import {login_data } from './loginActions';

// Initial State
const initialStates = {
   isFetching : "True",
   isFetched : "False",
   isFailed : "False"
}

const LoginReducer = (state = initialStates, action) => {
  switch (action.type) {
    case login_data:
      return Object.assign({}, state, {
           isFetching : "True",
           isFetched : "False",
           isFailed : "False"
      })

    default:
      return state;
  }
}


export default LoginReducer