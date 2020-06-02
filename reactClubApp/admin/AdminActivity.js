import React from 'react';
import ReactDOM from 'react-dom';
import '../Club.css';

var styles={ border:'1px solid'} 
class AdminActivities extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			activityData: [],
			event: '' ,
			dates:  '',
			_id:'',
		});
	}
	nameChange(event){
		this.setState({
			event:event.target.value
		});
	}
	dateChange(event){
		this.setState({
			dates:event.target.value
		});
	}

	componentDidMount() {
		this.fetchData();
    }

    fetchData(){
    	fetch("http://localhost:1234/activities" ,{
    		method: "GET",
            headers:{
                "Content-type": "application/json",
            }
    }).
    then(res => res.json()).
    then(json => this.setState({ activityData: json }));	
    }

	addRow(){
		let that = this;
        fetch("http://localhost:1234/activities", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            }, 
            body:JSON.stringify({
                	"event":that.state.event,
                	"dates":that.state.dates	
            })
        }).
        then(function(response){
                if(response.ok) {
                return response.json(); // a promise
                } else {
                    let info = `Status code: ${response.status}, ${response.statusText}`;
                    console.log("this is failure try " + info + " this is response" + response);
                }
        }). 
        then(function(response){
            var newdata = {event:that.state.event, dates:that.state.dates, _id:response._id}
            that.setState({ 
                activityData: that.state.activityData.concat(newdata)
            });
        });

	}
	

	deleteActivity(userID) {
		console.log(userID);
		let that = this;
        fetch("http://localhost:1234/activities/" + userID, {
            method: "DELETE",
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
                    console.log(info);
                }
        }).
        then(function(response){
        	let changeState = that.state.activityData;
        	let deleteOne = changeState.find(function (user) {
		    	return user._id === userID
		    });
		    console.log(deleteOne);
		    changeState.splice(response, 1);
		    that.setState({
		    	activityData: changeState
		    })

	});

			
	    
	}
	render(){
		let that = this;
		let addRowData = that.state.activityData.map(function(row, user){
			return(
				<tr key={row._id}>
				<td><button onClick={that.deleteActivity.bind(that, row._id)}>Delete</button></td>
				<td>{row.event}</td>
				<td>{row.dates}</td>
				</tr>)
			
		});

		const data = (
			<div>
			<h1>Activity Managenment</h1>
			<div className="container" style={styles}>
			<label>Activities:</label>
			<input name="event"  value={this.state.event} onChange={this.nameChange.bind(this)}></input>
			<label>Date:</label>
			<input name="date" value={this.state.dates} onChange={this.dateChange.bind(this)}></input>
			<button id="addBtn" onClick={this.addRow.bind(this)}>ADD</button>
			</div>
			</div>
			);
		return(
			<div className="AdminActivities">
			<main className="flex-container">
			{data}
			<h1>Activities</h1>
			<section id="activitiesTable">
			<table>
			<thead>
			<tr>
			<td></td>
			<td>Event</td>
			<td>Dates</td>
			</tr>
			</thead>

			<tbody>

			{addRowData}

			</tbody>
			</table>
			</section>
			</main>
			</div>
			);
	}
}

export default AdminActivities;
