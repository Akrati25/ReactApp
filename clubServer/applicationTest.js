// var express = require('express');
// var app = express();
const request = require('request-promise-native');

const goodInfo1 = {	uri: 'http://127.0.0.1:5555/applicants',
					method: "POST",
					json: true,
					body: {   
						"firstName": "I am still",
						"lastName":" message with you",
						"email":"method@outlook.com",
						"level":"Never Done It",
					  	"comments":"cool!"
					}
				}

const goodInfo2 = { uri: 'http://127.0.0.1:5555/applicants',
					method: "POST",
					json: true,
					body: {   
						"firstName": "I am still",
						"lastName":"lucky",
						"email":"simple@oulook.com",
						"level":"Advance",
					  	"comments":""
					}
				}				

const badInfo1 ={   uri: 'http://127.0.0.1:5555/applicants',
					method: "POST",
					json: true,
					body: {   
						"firstName": "",
						"lastName":"patel",
						"email":"simpleoulook.com",
						"level":"Advance",
					  	"comments":"Great!"
					}

}

const badInfo2 ={	uri: 'http://127.0.0.1:5555/applicants',
					method: "POST",
					json: true,
					body: {
						"lastName":"message with you",
						"email":"haha@nevermind.com",
						"level":"Never Done It",
						"comments":""

					}
	
}

async function test() {
	try {
		let res1 = await request(goodInfo1); 
		console.log(`Applicants Test 1: Good #1`); 
		console.log(`Application results: ${JSON.stringify(res1)}\n`);     
	}
	catch (e){
		console.log(`error: ${e}\n`);
	}
	try {
		let res2 = await request(goodInfo2); 
		console.log(`Applicants Test 2: Good #2`); 
		console.log(`Application results: ${JSON.stringify(res2)}\n`);     
	}
	catch (e){
		console.log(`error: ${e}\n`);
	}
	try {
		let res3 = await request(badInfo1); 
		console.log(`Applicants Test 3: Bad #1`); 
		console.log(`Application results: ${JSON.stringify(res3)}\n`);     
	}
	catch (e){
		console.log(`error: ${e}\n`);
	}
	try {
		let res4 = await request(badInfo2); 
		console.log(`Applicants Test 4: Bad #2`); 
		console.log(`Application results: ${JSON.stringify(res4)}\n`);     
	}
	catch (e){
		console.log(`error: ${e}\n`);
	}
}
test();	
