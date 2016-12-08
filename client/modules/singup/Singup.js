import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { submitFormRequest } from './SingupActions'
/*import {Grid, Row, Col, Button, Well, Input,ButtonInput}
 from 'react-bootstrap';*/

class Singup extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email:'',
      phoneno:'',
      Password: '',
    };
    
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneno = this.handlePhoneno.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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
  handlePassword(event) {
    this.setState({Password:event.target.value});
    console.log("Password": event.target.value)
  }

  signUp(event) {
    event.preventDefault();
    console.log("dcss",event.target.value);
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let  phoneno = this.refs.phoneno.value;
    let Password =this.refs.Password.value;
    if (name && email && phoneno && Password) {
      this.props.dispatch(submitFormRequest({name,email,phoneno,Password}));
      console.log("submitFormRequest",submitFormRequest);
    }

  }

  render() {
    return (
      <form>
          Name: <input type="text" name="Name"  value={this.state.name}  ref= "name" onChange={this.handleName}  /> <br/><br/>
          Email: <input type="text" name="Email" value ={this.state.email} onChange={this.handleEmail} ref= "email"/> <br/><br/>
          PhoneNo: <input type ="text" name="Phoneno" value={this.state.phoneno} onChange={this.handlePhoneno} ref="phoneno"/> <br/><br/>
          Password: <input type = "text" name="Password" value={this.state.Password} onChange={this.handlePassword} ref="Password"/> <br/>
          <input type="submit" onClick= {this.signUp}  value="Submit" />
      </form>
    )
  }
}
export default connect()(Singup);
