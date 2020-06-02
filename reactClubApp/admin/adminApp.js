import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import Home from '../guest/Home.js';
import About from '../guest/About.js';
import Login from '../guest/Login.js';
import AdminActivities from './AdminActivity.js'


class AdminApp extends React.Component{
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
            case "edit-activities":
    		intro = <AdminActivities />;
    		break;
            case "login":
            intro = <Login />;
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
                <li><a onClick={this.HandleClick.bind(this, 'edit-activities')}>Edit Club activities</a></li>
                <li><a onClick={this.HandleClick.bind(this, 'members')}>Members only</a></li>
                <li><a onClick={this.props.logout}>logout</a></li>
                </ul>
                </nav>
            </div>
		);
    	return(
	        <div className="AdminApp">
            
	        {element}
	        {intro}
	        </div>
        );
   }

}

    
export default AdminApp;