var express = require('express');
var app = express();
const request = require('request-promise-native');
var data = require('./activities.json');
var users = require('./clubUsersHash.json');

let cookieJar = request.jar();

const postInfo = {	
	url: 'http://127.0.0.1:5555/activities',
	method: "POST",
	simple: false,
	json: true,
	body: {
   		event:"basket ball ONLY FOR MEMBER ",dates:"Every sunday in April and May "
	},
	jar: cookieJar
};
// admin user login
let loginOptions = {
    url: 'http://127.0.0.1:5555/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "tirrivees1820@outlook.com",
        "password": "49OqspUq"
    },
    jar: cookieJar
};
// member login
let loginCust = {
    url: 'http://127.0.0.1:5555/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "chihuahua1899@gmail.com",
        "password": "'E`Gj3iJ"
    },
    jar: cookieJar
}
//logout
let logoutOptions = {
    url: 'http://127.0.0.1:5555/logout',
    json: true,
    method: "GET",
    body: { // admin user, see users.json file
        "email": "chihuahua1899@gmail.com",
        "password": "'E`Gj3iJ"
    },
    jar: cookieJar
}


async function test() {
	try {
		console.log("\nTest 1: Admin Login, add activity");
		let res1 = await request(loginOptions);
	    console.log(`Admin login test result: ${JSON.stringify(res1)}` );
	    console.log(`Admin Login Cookies:  ${cookieJar.getCookieString(loginOptions.url)}`);
	    console.log(`Number of activities: ${Object.keys(data).length}`);
	    let res2 = await request(postInfo);
	    console.log(`After add number of activities: ${res2.length}`);
	    // console.log(`Admin Login Cookies:  ${cookieJar.getCookieString(postInfo.url)}`);
	    let res6 = await request(logoutOptions);
	    console.log(`After Logout, Cookies: ${cookieJar.getCookieString(logoutOptions.url)}\n`);
	}
	catch (e) {
		console.log(`error: ${e}\n`);
	}

	try{
		console.log("Test 2: Member Login");
		let res3 = await request(loginCust);
		console.log(`Member login test result: ${JSON.stringify(res3)}` );
		console.log(`Member Login, Cookies: ${cookieJar.getCookieString(loginCust.url)}`);
		let res4 = await request(postInfo);
		console.log("Number of activities:" + (Object.keys(data).length + 1));
		
        console.log(`Member add activity error: ${JSON.stringify(res4)}`);
        console.log("Number of activities:" + (Object.keys(data).length + 1));
        let res7 = await request(logoutOptions);
	    console.log(`After Logout, Cookies: ${cookieJar.getCookieString(logoutOptions.url)}\n`);
	    console.log(`After Login test 2 , Cookies: ${cookieJar.getCookieString(loginCust.url)}\n`);
	}
	catch (e) {
		console.log(`error: ${e}\n`);
	}

	try{
		console.log("Test 3: Guest login");
		let res5 = await request(postInfo);
		console.log("Number of activities:" + (Object.keys(data).length + 1));
		console.log(`Bad Password login error: ${JSON.stringify(res5)}`);
		 console.log(`After Activity Test 3, Cookies: ${cookieJar.getCookieString(postInfo.url)}`)
	}
	catch (e) {
		console.log(`error: ${e}\n`);
	}

}
test()


