import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
/*import { submitFormRequest } from './SingupActions'
*//*import {Grid, Row, Col, Button, Well, Input,ButtonInput}
 from 'react-bootstrap';*/

class Login extends Component {

  /*constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email:'',
      phoneno:'',
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneno = this.handlePhoneno.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
    console.log("name",event.target.value);
  }

  handleEmail(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  handlePhoneno(event) {
    this.setState({phoneno: event.target.value});
    console.log("phoneno",event.target.value);
  }

  login(event) {
    event.preventDefault();
    console.log("dcss",event.target.value);
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let  phoneno = this.refs.phoneno.value;
    if (name && email && phoneno) {
      this.props.dispatch(submitFormRequest({name,email,phoneno}));
      console.log("submitFormRequest",submitFormRequest);
    }

  }*/

  render() {
    return (
      <form>
          Email: <input type="text" name="Email" ref= "email"/> <br/><br/>
          PhoneNo: <input type ="text" name="Phoneno" ref="phoneno"/><br/><br/>
          <input type="submit" value="Submit"/>
      </form>
    )
  }
}
export default connect()(Login);
