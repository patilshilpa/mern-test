import callApi from '../../util/apiCaller';

// Export Constants
export const add_Singup = 'add_Singup';


//Export Actions
export function addSingup(user) {
  console.log("inaction");
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
      },
    }).then(res => dispatch(addSingup(res.user)));
       
  }
}




