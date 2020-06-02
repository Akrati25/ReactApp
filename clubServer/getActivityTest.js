var express = require('express');
var app = express();
const request = require('request-promise-native');

const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tempDB', autoload: true});

const getInfo = {	url: 'http://127.0.0.1:5555/activities',
					method: "GET",
					json: true,
				};


request(getInfo, function(error, res, body) {
	db.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
        console.log("We found " + docs.length + " activities");
        console.log(JSON.stringify(docs));
        // res.json(docs);
    }
});
   	// var count = 1;
    // body.map(user => {
    // 	console.log(`Activity ${count++}: event: ${user.event}, date: ${user.dates}`);
    // });
});