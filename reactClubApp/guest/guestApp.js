import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';
import football from '../images/images.jpeg';
import Home from './Home.js';
import About from './About.js';
import Login from './Login.js';
import Activities from './activities.js';

class GuestApp extends React.Component{
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
            case "activities":
            intro = <Activities />;
            break;
            case "login":
            intro = <Login title={this.props.login} />;
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
            <li><a onClick={this.HandleClick.bind(this, 'members')}>Membership</a></li>
            <li><a onClick={this.HandleClick.bind(this, 'login')}>login</a></li>
            </ul>
            </nav>
            </div>
        );
            return(
            <div className="GuestApp">
                {element}
                {intro}
            </div>
        );
    }
}

export default GuestApp;