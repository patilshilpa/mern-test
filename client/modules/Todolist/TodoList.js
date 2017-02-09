import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
//import { submitFormRequest } from './SingupActions'
import {Button} from 'react-bootstrap';
import { ReactToastr, ToastContainer, ToastMessage} from 'react-toastr';
import { browserHistory } from 'react-router';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';


class ToDo  extends Component { 

	  constructor(props) {
    super(props);
  }


    render() {
    return (
    	 <div>
          <form>
          <h1>  wel come TOdo List</h1>
          <FormGroup>
           Name: <FormControl type="text"  ref="name" placeholder="name"/>
          </FormGroup>

          <FormGroup>
            Email:<FormControl type="text" ref="email"placeholder="email"/>
          </FormGroup>
          </form>

       </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log("signup1",state)
 
}
export default connect(mapStateToProps)(ToDo);
