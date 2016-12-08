import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { FormRequest } from './loginActions';


class Login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email:'',
      Password:'',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  
  handleEmail(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({Password: event.target.value});
    console.log("Password",event.target.value);
  }

  login(event) {
    event.preventDefault();
    console.log("hi ", event.target.value);
    let email = this.refs.email.value;
    let Password = this.refs.Password.value;
    if (email && Password) {
      this.props.dispatch(FormRequest({email,Password}));
      console.log("FormRequest",FormRequest);
    }

  }

  render() {
    return (
      <form>
          Email: <input type="text" name="Email" value ={this.state.email}  onChange={this.handleEmail}  ref= "email"/> <br/><br/>
          Password : <input type ="text" name="Password" value = {this.state.Password}  onChange={this.handlePassword}  ref="Password"/><br/><br/>
          <input type="submit" onClick= {this.login}  value="Submit"/>
      </form>
    )
  }
}
export default connect()(Login);
