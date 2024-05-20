const mongoose = require('mongoose');


const mongoURL = "mongodb://localhost:27017/TaskManagement";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//* Get the default connection
const db = mongoose.connection;

//* Define event listeners for the database connection
db.on('connected', () => {
    console.log("Your database is connected Successfully");
})
//* For error in connection
db.on('error', (err) => {
    console.log("In your database something went wrong")
});

//* For Disconnect the Database
db.on('disconnected', () => {
    console.log("your database is disconnected Sucessfully")
})

//* Export the databa