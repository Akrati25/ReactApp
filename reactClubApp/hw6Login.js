import React from 'react';
import ReactDOM from 'react-dom';
import './Club.css';

class Login extends React.Component{
	constructor(props) {
		super(props) 
		this.state = {
			user: '',
			newrole: ''
		}; 
	}
	HandlerChange(e){
		let user1 = "admin@email.org";
		let user2 = "member@email.org";
		let anotherRole ='';
		if(e.target.value == user1){
			anotherRole = "admin";
		}else if(e.target.value == user2){
			anotherRole = "member";
		}
		this.setState({
			user: e.target.value,
			newrole: anotherRole
		})
	}
	render(){
		const element = (<div>
			<main  className="flex-container">
			<h1>Login </h1>
			<div className="container">
			<label><b>Email:</b></label>
			<input id="user" type="text" name="user" email={this.state.user} onChange={this.HandlerChange.bind(this)}></input>
			<label><b>Password</b></label>
			<input id="password"  type="password" placeholder="Enter Password" name="psw" required></input>
			<button onClick={(e) =>  this.props.title(this.state.user, this.state.newrole)}>login</button>
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