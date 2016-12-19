import callApi from '../../util/apiCaller';

// Export Constants
export const add_Email = 'add_Email';


//Export Actions
export function addEmail(EmailDetails) {
  console.log("happpy");
  return {
    type: add_Email,
    EmailDetails,
  };
}

export function emailRequest(EmailDetails) {
        console.log("EmailDetails",EmailDetails)
  return (dispatch) => {
    return callApi('Email','post', {
      EmailDetails: {
        to: EmailDetails.to,
        sub: EmailDetails.sub,
        message:EmailDetails.message,
      },
    }).then(res => dispatch(addEmail(res.EmailDetails)));
       
  }
}

