import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';
//import md5 from 'md5'; 


// Export Constants
export const add_Singup = 'add_Singup';


//Export Actions
export function addSingup(user) {
  return {
    type: add_Singup,
    user,
  };
}

export function submitFormRequest(user) {
  return (dispatch) => {
    return callApi('signUp','post', {
      user: {
        name: user.name,
        email: user.email,
        phoneno:user.phoneno,
        Password:user.Password,
      },
    }).then(res => dispatch(addSingup(res.user)));
       
  }
}

