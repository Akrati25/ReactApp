const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// Your code here to process the passwords

for(var i=0; i < 40 ; i++){
	let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
    let passHash = bcrypt.hashSync(users[i].password, salt);
	 var addJsonArray =
	
		{
			"firstName": users[i].firstName,
		    "lastName": users[i].lastName,
		    "email": users[i].email,
		    "passvalue": passHash,
		    "role": users[i].role
		};
	hashedUsers.push(addJsonArray)	
		
}

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));
