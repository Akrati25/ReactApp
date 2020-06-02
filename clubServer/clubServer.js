var express = require('express');
var app = express();
//express-session
var session = require('express-session')

app.use(express.static('public'));
//NeDB DATAbase
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tempDB', autoload: true});

var data = require('./activities.json');

var config = JSON.stringify(data);
var data = JSON.parse(config);

var users = require('./clubUsersHash.json');


const bcrypt = require('bcryptjs');
//For json validate
var Ajv = require('ajv');
var ajv = new Ajv();
var schema = require('./memberInfoSchema.json');


const cookieName = "pi2968activity"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'websystem course CSUEB',
	resave: false,
	saveUninitialized: false,
	name: cookieName // Sets the name of the cookie used by the session middleware
}));


//User this middlewave to restrict paths only to admins
const checkAdminMiddleware = function (req, res, next) {
	console.log(req.session.user )
	if (req.session.user.role != "admin") {
		next();
		// res.status(401).json({error: "Not permitted"});
	} else {
		next();
	}
};

const checkCustomerMiddleware = function (req, res, next) {
	if (req.session.user.role === "member") {
		res.status(401).json({error: "Not permitted"});
	} else {
		console.log(`Session info: ${JSON.stringify(req.session)} \n`);
		next();
	}
};

// This initializes session state
function setUpSessionMiddleware(req, res, next) {
	 // console.log(`\nsession object: ${JSON.stringify(req.session.cookie)}`);
	// console.log(`session id: ${req.session.id}`);
	let cookieSet = req.session.cookie;
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.cookie(cookieName, cookieSet);
	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};
 
app.use(setUpSessionMiddleware);

//GET interface to return users information only to admin
app.get('/activities', async function (req, res) {
	db.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
 			res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        	console.log("We found " + docs.length + " activities");
        	// console.log(JSON.stringify(docs));
        	res.json(docs);
    }
});
	// res.json();
 });

app.get('/users', checkAdminMiddleware, function (req, res){
	console.log(`email : ${JSON.stringify(req.session.users)}`);
	let email = req.body.email;
	let password = req.body.password;

	let adminUser = users.find(function (user) {
		return user.email === email
	});

	delete adminUser.passvalue;
	res.json(adminUser);

});

function activityErrors (err, req, res, next) {
	console.log(JSON.stringify(err));
	return ;
}

// Only available to admin, returns updated activity list.
app.post('/activities', express.json(), function(req, res) {
	let temp = req.body;
	let event = {
		event: temp.event,
		dates: temp.dates,
	};
	console.log(`this is post activity  ${req.body.event}`);
	db.insert(event, function (err, newrec) {
        if (err) {
        	console.log("something is wrong");
        }
        else{
	        // console.log(JSON.stringify(newrec));
	        res.json(newrec);
        }       
	});
});


app.delete('/activities/id',function (req, res) {
	var id = req.params.id;
	db.remove({ "_id": id }, {}, function (err, numRemoved) {
           if (err) {
        	console.log("something is wrong");
        }
        else{
	        console.log(JSON.stringify(numRemoved));
	        res.json(numRemoved);
        }  
	});
	db.find({}, function(err, doc){
    if (err) {
		console.log("something is wrong");
	} else {
		console.log("currently " + doc.length + " activities");
	}
})
	
}); 


app.post('/login', express.json(), function (req, res) {

	let email = req.body.email;
	let password = req.body.password;
	let auser = users.find(function (user) {
		return user.email === email
	});

    if (!auser) { // Not found

    	res.status(401).json({error: true, message: "User/Password error email " + req.body.email + " req " + req});
    	return;
    }
    let verified = bcrypt.compareSync(password, auser.passvalue);
    
    if (verified) {

    	let oldInfo = req.session.user;
    	req.session.regenerate(function (err) {
    		if (err) {
    			console.log(err);
    		}
    		let newUserInfo = Object.assign(oldInfo, auser);
    		delete newUserInfo.passvalue;
    		req.session.user = newUserInfo;
    		res.json(newUserInfo);
    	});
    } 
    else 
    {   
    	res.status(401).json({error: true, message: "User/Password error "});
    }
});

app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.json({message: "Goodbye"});
	})
});

app.post('/applicants', express.json(), function(req, res) {
	var ajv = new Ajv();
	var validate = ajv.compile(schema);
	var valid = validate(req.body);
	if (!valid) {
	    return res.json({error: true, message: validate.errors});
	} else {
		console.log('User data is valid');
  	    res.status(200).json({message: "received your application"})
  	
}    	

});


host = '127.0.0.1';
port = '5555';

app.listen(port, host, function () {
	console.log(`Basic JSON app listening on IPv4: ${host}:${port}`);
});


