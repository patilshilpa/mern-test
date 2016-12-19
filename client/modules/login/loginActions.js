import callApi from '../../util/apiCaller';

export const login_data = 'login_data';

//Export Actions
export function loginData(login) {
  if(login){
    localStorage.setItem("token", login.token);
  }
  return {
    type: login_data,
    login,
  };
}

export function FormRequest(login){
  return (dispatch)=> {
    return callApi('login','post',{
      login:{
        email:login.email,
        Password:login.Password,
      },
    }).then(res=>dispatch(loginData(res.login)));
  }
}

