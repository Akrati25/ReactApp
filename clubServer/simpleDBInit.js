const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/tempDB', autoload: true});

const activity = require('./activities.json');

db.insert(activity, function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
        console.log("Added " + newDocs.length + " activity");
    }
});