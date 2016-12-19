class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state ={
			email: '',
			password: ''
		}

		this.submitHandle = this.submitHandle.bind(this);
		this.handleChange = this.handleChange.bind(this)
	}

	componentWillReceiveProps(nextProps) {
  	if(nextProps.message == 'Authentication failed. User not found.') {
  		this.refs.container.error(`${nextProps.message}`);
  	} else if(nextProps.message == 'Authentication failed. Wrong password.') {
  		this.refs.container.error(`${nextProps.message}`);
  	} else if(nextProps.message =='successfully LoggedIn') {
  		Token.setToken(nextProps.token);
  		browserHistory.push('/Home')
  	}
  }

	submitHandle(e){
		e.preventDefault();
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
		if(email == '' || '/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/') {
			this.setState({email: 'Email Id is required'})
		}else if(password == '') {
			this.setState({password: 'Password is required'})
		}
		// console.log("coming inside this",email,password);
		if(email && password){
			this.props.dispatch(signInRequest({email,password}))
		}
	}

	handleChange(e) {
		console.log("coming in handle");
		this.setState({email: ''});
		this.setState({password: ''})
	}	

	render() {
		return (
			<div>
				<Link to={'/SignUp'}>Signup</Link>	
				<form>
					<h1>Welcome Back! Please Login</h1>
					<FormGroup>
						<FormControl type="text"  ref="email" onChange= {this.handleChange} placeholder="email"/>
						{this.state.email}
					</FormGroup>
					<FormGroup>
						<FormControl type="password" ref="password" onChange= {this.handleChange} placeholder="Password"/>
						{this.state.password}
					</FormGroup>
					 <ToastContainer ref="container"
                        toastMessageClass={ToastMessage.jQuery}
                        className="toast-top-right" />
					<FormGroup>
						<FormControl type="submit" className="btn btn-primary" onClick={this.submitHandle} value="Log In"/>
					</FormGroup>
				</form>
			</div>
		)
	}
}