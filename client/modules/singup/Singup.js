import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { submitFormRequest } from './SingupActions'
import {Button} from 'react-bootstrap';
import { ReactToastr, ToastContainer, ToastMessage} from 'react-toastr';
import { browserHistory } from 'react-router';
 import { FormGroup, FormControl } from 'react-bootstrap';
 import { Link } from 'react-router';


class Singup extends Component { 

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email:'',
      phoneno:'',
      Password: '',
    };
  
    this.handleChange = this.handleChange.bind(this)
    this.signUp = this.signUp.bind(this);
  }

   componentWillReceiveProps(nextProps) {
    
    console.log("coming",nextProps.message.message);
    if(nextProps.message.message == 'user already registered') {
      this.refs.container.error(`${nextProps.message.message}`);
      } else if(nextProps.message.message =='register successfully') {
        this.refs.container.success(`${nextProps.message.message}`);
        setInterval(function(){browserHistory.push('/email') }, 2000);
      
    }
  }
   
  signUp(event) {
    event.preventDefault();
    console.log("dcss",event.target.value);
   // browserHistory.push('/login');
      let name = ReactDOM.findDOMNode(this.refs.name).value;
      let email = ReactDOM.findDOMNode(this.refs.email).value;
      let phoneno = ReactDOM.findDOMNode(this.refs.phoneno).value;
      let Password = ReactDOM.findDOMNode(this.refs.Password).value;
       let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
       let Pattern =/^\d{10}$/; 
      if(name == '') {
      this.setState({name: 'name Id is required'})
    }else if(email == '') {
      this.setState({email: 'email is required'})
    }else if(!pattern.test(email)){
      this.setState({email: '*Please enter valid email Id'})
    }
    else if(phoneno ==''){
      this.setState({phoneno:'phoneno is required'})
    } else if(!Pattern.test(phoneno)){
      this.setState({phoneno: '*Please enter 10 digit'})
    }
    else if(Password ==''){
      this.setState({Password:'Password is required'})
    }

   if (name && email && phoneno && Password) {
      this.props.dispatch(submitFormRequest({name,email,phoneno,Password}));
      console.log("submitFormRequest",submitFormRequest);
    }
  }
   
  handleChange(e) {
    console.log("coming in handle");
    this.setState({name:''});
    this.setState({email: ''});
    this.setState({phoneno:''});
    this.setState({Password: ''})
  } 

  render() {
    return (
     <div>
        <form>
          <h1>Please Signup</h1>
          
          <FormGroup>
           Name: <FormControl type="text"  ref="name" onChange= {this.handleChange} placeholder="name"/>
            {this.state.name}
          </FormGroup>
          <FormGroup>
            Email:<FormControl type="text" ref="email" onChange= {this.handleChange} placeholder="email"/>
            {this.state.email}
          </FormGroup>
           <FormGroup>
           Phoneno :<FormControl type="text" ref="phoneno" onChange= {this.handleChange} placeholder="phoneno"/>
            {this.state.phoneno}
          </FormGroup>
           <FormGroup>
           Password :<FormControl type="password" ref="Password" onChange= {this.handleChange} placeholder="Password"/><br/><br/>
            {this.state.Password}
          </FormGroup>

           <ToastContainer ref="container"
                        toastMessageClass={ToastMessage.jQuery}
                        className="toast-top-right" />
          <FormGroup>
            <FormControl type="submit" className="btn btn-primary" onClick={this.signUp} value="signUp"/>
             <Link to={'/login'}>login</Link> 
          </FormGroup>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("signup1",state)
  return {
    message : state.sign.data
  }
}
export default connect(mapStateToProps)(Singup);
