// var express = require('express');
// var app = express();
// const request = require('request-promise-native');
// var data = require('./activities.json');

// const DataStore = require('nedb');
// const db = new DataStore({filename: __dirname + '/tempDB', autoload: true});

// Shows Updating
// 
// 
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tempDB', autoload: true});

db.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
        console.log("Initial get of activity");
        console.log("currently " + docs.length + " activities");
    }
});

db.remove({"_id": /K5zf6cD0btsRSxe1/}, function(err, doc) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("After first good activity Deletion");
	}
});
db.find({}, function(err, doc){
    if (err) {
		console.log("something is wrong");
	} else {
		console.log("currently " + doc.length + " activities");
	}
})

db.remove({"_id": /sDANVQpmCwkEqqFr/}, function(err, doc) {
	if (err) {
		console.log("something is wrong");
	} else {
		console.log("After another good activity Deletion");
	}
});
db.find({}, function(err, doc){
    if (err) {
		console.log("something is wrong");
	} else {
		console.log("currently " + doc.length + " activities");
	}
})

// db.remove({"comName": /Tasmanian Devil/},
//     function (err, numRemoved) {
//     	// console.log("We found " + docs.length + " documents");
//         console.log("removed " + numRemoved);
// });




// const verbose = false;

// const getInfo = {	uri: 'http://127.0.0.1:5555/activities',
// 					method: "GET",
// 					json: true,
// 					body: { }
// 				};

// let firstdel = {	uri: 'http://127.0.0.1:5555/activities/yj0J9yLcNawe43ip',
// 					method: "DELETE",
// 					json: true,
// 				};

// // let baddel ={	uri: 'http://127.0.0.1:5555/activities/GC2ajXdTtpim4itm',
// // 				method: "DELETE",
// // 				json: true,
// // 			};

// let anotherGooddel ={ 	uri: 'http://127.0.0.1:5555/activities/UpNwHxAQVP63NcjU',
// 						method: "DELETE",
// 						json: true,
// 					};

// request(getInfo, function(error, res, body) {
// 	console.log(`Initial GET of activities`);
// 	db.count({}, function(err, count) {
//     if (err) {
//         console.log("something is wrong");
//     } else {
//         console.log(`Currently  ${count} activities`)
//     }
// });
// });

// request(firstdel, function(error, res, body){
// //     console.log("After first good activity deletion");
// // 	db.count({}, function(err, count) {
// //     if (err) {
// //         console.log("something is wrong");
// //     } else {
// //         console.log(`Currently  ${count} activities`)
// //     }
// // });
// 	// console.log("After first good activity deletion");
// 	// var countCurrentActivity = Object.keys(data).length - 1;
// 	// console.log(`Currently ${countCurrentActivity} activities`);
//  });

// // request(anotherGooddel,function(error, res, body){
// // 	console.log("After another good activity delete");
// // 	db.count({}, function(err, count) {
// //     if (err) {
// //         console.log("something is wrong");
// //     } else {
// //         console.log(`Currently  ${count} activities`)
// //     }
// // });
// // 	// res.end();
// // });	
// function printdata(db){
// 	 // var countCurrentActivity = Object.keys(count).length;
// 	 // console.log(`Currently ${countCurrentActivity} activities`); 
// 	db.find({}, function(err, count) {
//     if (err) {
//         console.log("something is wrong");
//     } else {
//     	console.log("We found " + Object.keys(count).length + " activities");
//         // console.log(`counted ${count} activities`)
//     }
// });
// }
// async function test() {
// 	try {
// 		p1 = new Promise(function(resolve, reject){
// 			setTimeout(()=>reject("StatusCodeError:400 - {error: true, message: bad index}"), 2000)
// 		}).
// 		then(function(data){
// 		    console.log(" First Initial GET of activities");
// 			// printdata(data);
// 			return request(firstdel);

// 		}).
// 		then(function(data){
// 			console.log("After first good activity deletion");
			
// 			return request(anotherGooddel);
// 			printdata(count);
// 		}).
// 		// then(function(data){
// 		// 	console.log("After first good activity deletion");
// 		// 	// printdata(data);
// 		// 	return(anotherGooddel);
// 		// }).
// 		catch(function(err){
// 			 console.log("After first good activity delete");
// 			 printdata(db);
// 		     // console.log(`Error: ${err}`);
// 			return request(anotherGooddel);
// 			// printdata(data);
// 		}).
// 		then(function(data){
// 			console.log("After another good activity delete");
// 					db.find({}, function(err, count) {
// 		    if (err) {
// 		        console.log("something is wrong");
// 		    } else {
// 		    	// console.log("We found " + count + " activities");
// 		         console.log(`counted ${count.length} activities`)
// 		    }
// 		});
// 		})
// 	} catch (e) {
// 		console.log(`exception: ${e}`);
// 	}
// }
// test()

