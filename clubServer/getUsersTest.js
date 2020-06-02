
  
const request = require('request-promise-native');
var session = require('express-session');
var users = require('./clubUsersHash.json');

let cookieJar = request.jar();
//admin login
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

let adminLogin = {
    url: 'http://127.0.0.1:5555/Users',
    json: true,
    method: "GET",
    body: { // admin user, see users.json file
        "email": "tirrivees1820@outlook.com",
         "password": "49OqspUq"
    },
    jar: cookieJar
}

let memberLogin ={
	url: 'http://127.0.0.1:5555/Users',
    json: true,
    method: "GET",
    body: { // admin user, see users.json file
        "email": "chihuahua1899@gmail.com",
        "password": "'E`Gj3iJ"
    },
    jar: cookieJar
}

let guestLogin={
	url: 'http://127.0.0.1:5555/Users',
    json: true,
    method: "GET",
    body: { // admin user, see users.json file
        "email": "chihuahua@gmail.com",
        "password": "'EGj3iJ"
    },
    jar: cookieJar
}

async function test() {
	try{
 		console.log("\nGet users Test 1: Admin login");
 		let res1 = await request(loginOptions);
 		console.log(`Admin login test result: ${JSON.stringify(res1)}` );
 		console.log(`Admin Login Cookies:  ${cookieJar.getCookieString(loginOptions.url)}`);
 		console.log("Number of Users: " + (Object.keys(users).length));
 		let res2 = await request(logoutOptions);
	    console.log(`After Logout, Cookies: ${cookieJar.getCookieString(logoutOptions.url)}\n`);
 		
	}
	catch (e) {
		console.log(`error: ${e}\n`);
	}

	try{
		console.log("\nGet users Test 2: Member login");
		let res3 = await request(loginCust);
		console.log(`Member Login, Cookies: ${cookieJar.getCookieString(loginCust.url)}`);
		let res4 = await request(memberLogin);
		console.log(`Member login test result: ${JSON.stringify(res4)}` );
	}
	catch (e) {
		console.log(`Member get users error: ${e}`);
		let res5 = await request(logoutOptions);
	    console.log(`After Logout, Cookies: ${cookieJar.getCookieString(logoutOptions.url)}\n`);
	}

	try{
		console.log("\nGet users Test 3: Guest");
		let res6 = await request(guestLogin);
		console.log(`Member login test result: ${JSON.stringify(res6)}` );

	}
	catch (e) {
		console.log(`Guest get users error: ${e}`);
		console.log(`Get user test 3, cookies: ${cookieJar.getCookieString(guestLogin.url)}\n`)
	}
}

test();


