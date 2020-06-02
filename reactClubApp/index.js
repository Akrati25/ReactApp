import React from "react";
import ReactDOM from "react-dom";
import './Club.css';
import football from './images/images.jpeg';
import GuestApp from './guest/guestApp.js';
import MemberApp from './member/memberApp.js';
import AdminApp from './admin/adminApp.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {role: "guest" , userInfo: {"name": "Akrati Mahajan", "AnythingElse": "Just for fun"}, firstName:'', lastName:'',showTheThing:false
    };
	} 
    loginHandler(role, firstName, lastName ){
        this.setState({
            role: role,
            firstName: firstName,
            lastName : lastName
        });
    }
    logoutHandler(){
        let that = this;
            fetch("/logout", {
            method: "GET",
                headers:{
                    "Content-type": "application/json",
                } 
            }).
            then(function(response){
                if(response.ok) {
                return response.json(); // a promise
                } else {
                    let info = `Status code: ${response.status}, ${response.statusText}`;
                    console.log(response);
                }
            }). 
            then(function(response){
               that.setState({ 
                    role: "guest",
                    firstName: '',
                    lastName: '',
                    showTheThing:false
                });
            });
        }
    
    render() {
    	let contents = null;
    	switch (this.state.role) {
    		case "guest":
    		contents = <GuestApp login={this.loginHandler.bind(this)} />;
    		break;
    		case "member":
    		contents = <MemberApp logout={this.logoutHandler.bind(this)}/>;
            this.state.showTheThing = true;
    		break;
    		case "admin":
    		contents = <AdminApp logout={this.logoutHandler.bind(this)}/>;
            this.state.showTheThing = true
    		break;
    		default:
    		contents = <h2>Warning something went wrong!!!</h2>;
    	}

        let userData = (
            <div className="content">
            <span>{this.state.firstName}</span>
            <span>    {this.state.lastName}</span>
            <span>    {this.state.role}</span> 

            </div>
        );
    	return (
    		<div className="App">
            {this.state.showTheThing && userData}
    		{contents}
    		</div>
    	);
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

