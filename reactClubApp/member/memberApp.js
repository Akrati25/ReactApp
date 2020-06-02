import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import Home from '../guest/Home.js';
import About from '../guest/About.js';
import Login from '../guest/Login.js';
import Activities from '../guest/activities.js';

class MemberApp extends React.Component{
	constructor(props) {
		super(props) 
		this.state = {
			show: "home"
        }; // We will have "user" and "admin" roles too.
    }
	HandleClick(newshow) {
    	this.setState({
    		show: newshow
    	});
    }
    render(){
    	let intro = null;
    	switch (this.state.show) {
    		case "home":
    		intro = <Home />;
    		break;
    		case "about":
    		intro = <About/>;
    		break;
    		case "login":
    		intro = <Login />;
    		break;
    		case "activities":
    		intro = <Activities />;
    		break;
            case "members":
            intro = <clubMembership />;
            break;
    		default:
    		intro = <h1>Not Implemented Yet!!!</h1>;
    	}
    	const element = (
    		<div>
    		<nav>
    		<ul>
    		<li><a onClick={this.HandleClick.bind(this, 'home')}>Home</a></li>
    		<li><a onClick={this.HandleClick.bind(this, 'about')}>About</a></li>
    		<li><a onClick={this.HandleClick.bind(this, 'activities')}>Club activities</a></li>
    		<li><a onClick={this.HandleClick.bind(this, 'members')}>Members only</a></li>
    		<li><a onClick={this.props.logout}>logout</a></li>
    		</ul>
    		</nav>
    		</div>
    	);

    	return(
    		<div className="MemberApp">
    		{element}
    		{intro}
    		</div>
    	);
    }
}

export default MemberApp;