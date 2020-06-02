const rp = require('request-promise-native');
var session = require('express-session');

// Use this to store cookies in between sessions.
let cookieJar = rp.jar();

let getInfo = {   url: 'http://127.0.0.1:5555/activities',
method: "GET",
json: true,
body: { },
jar: cookieJar
}


let goodLogin = {
    url: 'http://127.0.0.1:5555/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "tirrivees1820@outlook.com",
        "password": "49OqspUq"
    },
    jar: cookieJar

}

let badEmailLogin = {
    url: 'http://127.0.0.1:5555/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "tirriveesoutlook.com",
        "password": "49OqspUq"
    },
    jar: false
    
}

let badPasswordLogin = {
    url: 'http://127.0.0.1:5555/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "tirrivees1820@outlook.com",
        "password": "49Oq44Uq"
    },
    jar: false
    
}

let logout = {
    url: 'http://127.0.0.1:5555/logout',
    json: true,
    method: "GET",
    body: { // admin user, see users.json file
        "email": "tirrivees1820@outlook.com",
        "password": "49Oq44Uq"
    },
    jar: cookieJar
}

async function test() {
	try {
		console.log("login Test 1: Good Login");
        let res1 = await rp(getInfo);
        console.log(`Called activities, Cookies:  ${cookieJar.getCookieString(getInfo.url)}\n`);
        let res2 = await rp(goodLogin);
        console.log(`Good login Test results: ${JSON.stringify(res2)}\n`);
        console.log(`After Good login, Cookies:  ${cookieJar.getCookieString(goodLogin.url)}\n`);
        let res3 = await rp(logout);
        console.log(`After logout, Cookies:  ${cookieJar.getCookieString(logout.url)}\n`);
    } catch (e) {
        console.log(`error: ${e}\n`);
    }

    try {
        console.log("Login Test 2: Bad email");
        let res4 = await rp(getInfo);
        console.log(`Called activities, Cookies:  ${cookieJar.getCookieString(getInfo.url)}\n`);
        let res5 = await rp(badEmailLogin);
        

    } catch (e) {
        
        console.log(`Bad email login error:  ${e}\n`);
        console.log(`Called activities, Cookies:  ${cookieJar.getCookieString(badEmailLogin.url)}\n`);
    }

    try {
        console.log("Login Test 3: Bad password");
        let res7 = await rp(badPasswordLogin);
        
    } catch (e) {
        console.log(`bad password login error: ${e}\n`);
        console.log(`Called activities, Cookies:  ${cookieJar.getCookieString(badPasswordLogin.url)}\n`);
    }

 }
test();
