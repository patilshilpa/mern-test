import {add_Singup } from './SingupActions';



// Initial State
const initialState = {
   isRegistering : "True",
   isRegistered : "False",
   isRegisteredFailed : "False"
}

const SingupReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Singup :
      return Object.assign({}, state, {
        isRegistering : "False",
        isRegistered : "True",
        isRegisteredFailed : "False"
      })

    default:
      return state;
  }
}


export default SingupReducer





