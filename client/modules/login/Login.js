import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { FormRequest } from './loginActions';
import {Grid, Row, Col, Button, Well, Input,ButtonInput}
 from 'react-bootstrap';
  import { FormGroup, FormControl } from 'react-bootstrap';
import { ReactToastr, ToastContainer, ToastMessage} from 'react-toastr';
import { Link } from 'react-router';
//import Token from '../../Tokens';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      Password:'',
    };

  
     this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("coming",nextProps.message.message);
    if(nextProps.message.message == 'Authentication failed. User not found.') {
      this.refs.container.error(`${nextProps.message.message}`);
    } else if(nextProps.message.message == 'Authentication failed. Wrong password.') {
      this.refs.container.error(`${nextProps.message.message}`);
    } else if(nextProps.message.message =='Enjoy your token') {
      this.refs.container.success(`${nextProps.message.message}`);
      browserHistory.push('/email');
    }
  }


  login(event) {
    event.preventDefault();
    // router change 
    console.log("hi ", event.target.value);
   let email = ReactDOM.findDOMNode(this.refs.email).value;
    let Password = ReactDOM.findDOMNode(this.refs.Password).value;
     let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email == '' ) {
      this.setState({email: 'Email Id is required'})
    }else if(!pattern.test(email)){
      this.setState({email: '*Please enter valid email Id'})
    }
    else if(Password == '') {
      this.setState({Password: 'Password is required'})
    }

    if (email && Password) {
      this.props.dispatch(FormRequest({email,Password}));
      console.log("FormRequest",FormRequest);
    }
  
}

 handleChange(e) {
    console.log("coming in handle");
    this.setState({email: ''});
    this.setState({Password: ''})
  } 


  render() {
    return (
          <div>
        <form>
          <h1>Please Login</h1>
          <FormGroup>
           Email: <FormControl type="text"  ref="email" onChange= {this.handleChange} placeholder="email"/>
            {this.state.email}
          </FormGroup>
          <FormGroup>
            Password:<FormControl type="password" ref="Password" onChange= {this.handleChange} placeholder="Password"/>
            {this.state.Password}
          </FormGroup>
           <ToastContainer ref="container"
                        toastMessageClass={ToastMessage.jQuery}
                        className="toast-top-right" />
          <FormGroup>
            <FormControl type="submit" className="btn btn-primary" onClick={this.login} value="LogIn"/>
          </FormGroup>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log("hello",state.login.data);
  return {
    message : state.login.data,
    token : state.login.data,
  }
}

export default connect(mapStateToProps)(Login)






