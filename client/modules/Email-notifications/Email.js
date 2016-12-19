import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'; 
//importing the actions form actions file
import {emailRequest } from './EmailActions';
import { ReactToastr, ToastContainer, ToastMessage} from 'react-toastr';
import {Grid, Row, Col, Button, Well, Input,ButtonInput}
 from 'react-bootstrap';
 import { FormGroup, FormControl } from 'react-bootstrap';
import Token from './Token';


class Email extends Component {  // Creating a component 

  constructor(props) {   // pass the data
    super(props);

    // intializations of State 
    this.state = {
      to:'',
      sub:'',
      message:''
    };
    this.validateTo = false;
     this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.email = this.email.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    console.log("coming",nextProps.message.message);
    console.log("coming successfully",nextProps.message.message_mail);
    if(nextProps.message.message == '') {
      this.refs.container.error(`${nextProps.message.message}`);
    } else if(nextProps.message.message == 'Email sent successfully') {
      this.refs.container.success(`${nextProps.message.message}`);
    } else if(nextProps.message.message =='Email sent successfully') {
      //browserHistory.push('/')
    }
  }

  email(event) {  // event handler to take values form the dom
    event.preventDefault();
    console.log("hi ", event.target.value);
     if(!this.validateTo){
      alert("invalid email id");
     }  
     else {
        let to = ReactDOM.findDOMNode(this.refs.to).value;
        let sub = ReactDOM.findDOMNode(this.refs.sub).value;
        let message = ReactDOM.findDOMNode(this.refs.message).value;
   // condtions to  check  all the  value present and sending to a  actions 
       if(sub == '' ) {
        this.setState({sub: ' Subject is required'})
      }else if(message == '') {
        this.setState({message: ' message is required'})
      }

    if (to && sub && message) {
      this.props.dispatch(emailRequest({to,sub,message})); 
      console.log("FormRequest",emailRequest);
    }
  }
}
  validate(to){
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(to);
  }

    handleChange(event) {
    console.log("coming in handle");
     this.validateTo = this.validate(event.target.value)
  }

  handleChangeEvent(event) {
    console.log("coming in handle");
    this.setState({sub: ''});
    this.setState({message: ''})
  } 


   /*logout(){
    localStorage.removeItem('token');
    browserHistory.push('/singup');
    console.log("removed");
  }*/

  removeToken(e) {
  Token.removeToken()
  //browserHistory.push('/Login');
}



 // create the render fuctions and  design html form  to diaply in browser and return fuction 
  
  render() {
      if(Token.getToken() != null) {
    return (
     <div>
        <form>
          <h1>Welcome </h1>
          
          <FormGroup>
           To: <FormControl type="text"  ref="to" onChange= {this.handleChange} placeholder="email"/>
            {this.state.to}
          </FormGroup>
          <FormGroup>
           Subject: <FormControl type="text" ref="sub" onChange= {this.handleChangeEvent} on placeholder="sub"/>
            {this.state.sub}
          </FormGroup>
           <FormGroup>
           Message: <FormControl type="text" ref="message" onChange= {this.handleChangeEvent} placeholder="Password"/>
            {this.state.message}
          </FormGroup>
           <ToastContainer ref="container"
                        toastMessageClass={ToastMessage.jQuery}
                        className="toast-top-right" />
          <FormGroup>
            <FormControl type="submit" className="btn btn-primary" onClick={this.email} value="submit"/>
           <Button bsStyle="primary" bsSize="large" onClick={this.logout} >Logout</Button>
             </FormGroup>
        </form>
      </div>
    )
     }else {
    return (
      <div>
      <h1>401:page not found!</h1>
      </div>
      )
  }
  }
}

function mapStateToProps(state) {
  console.log("hello",state.Email.data);     // connect to the store and reducer 
  return {
    message : state.Email.data,
    token : state.Email.data,
    message_mail: state.Email.data,
  }
}

export default connect(mapStateToProps)(Email)

 
 




