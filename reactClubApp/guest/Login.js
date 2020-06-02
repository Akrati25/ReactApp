import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';

class Login extends React.Component{
	constructor(props) {
		super(props) 
		this.state = {
			email: '',
			password: '',
			role: '',
			firstName: '',
			lastName: ''
		}; 
	}
	updateEmail(e){
		this.setState({
			email: event.target.value
		});
	}
	updatePassword(e){
		this.setState({
			password: event.target.value
		}); 
	}
	
	loginChange(){
		let that = this;
		fetch("http://localhost:1234/login", {
			method: "POST",
			headers:{
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				"email": that.state.email,
				"password": that.state.password
			})
		}).
		then(function(response){
			if(response.ok) {
            	return response.json(); // a promise

        	} else {
        		let info = `Status code: ${response.status}, ${response.statusText}`;
        	}
        }).
        then(function(response){
    		that.setState({ 
	    		role: response.role,
	    		firstName: response.firstName,
	    		lastName: response.lastName 
    		});
    		that.props.title(that.state.role, that.state.firstName, that.state.lastName);
    	});

	}
render(){
	const element = (<div>
		<main  className="flex-container">
		<h1>Login </h1>
		<div className="container">
		<label><b>Email:</b></label>
		<input id="user" type="text" name="email" value={this.state.email} onChange={this.updateEmail.bind(this)}></input>
		<label><b>Password</b></label>
		<input id="password"  type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.updatePassword.bind(this)} required></input>

		<button id="TheButton" onClick={this.loginChange.bind(this)}  >login</button>
		</div>
		</main>
		<footer>
		<p>Copyright © 2020 Akrati Mahajan </p>
		</footer> 
		</div>
		);
	return(
		<div className="Login">
		{element}
		</div>
		);
}
}

export default Login;