

// Setup empty JS object to act as endpoint for all routes

const projectData = {};

// Require Express to run server and routes and dependancies
let express = require('express')

let bodyParser = require('body-parser')
let cors = require('cors')


// Start up an instance of app
const app = express()


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));






// making the post rout 
app.post('/add', sentInfo);

function sentInfo(req, res) {

    projectData["temp"] = req.body.temp;
    projectData["date"] = req.body.date;
    projectData["feeling"] = req.body.feeling;
    projectData["feels_like"] = req.body.feels_like;
    res.send(projectData);
    console.log(projectData);
};





// Respond with JS object when a GET request is made to the homepage

app.get('/all', info);

//the call back funtion 
function info(req, res) {
    console.log("post received")

    res.send(projectData);
}




// Setup Server

const port = 8080;
const server = app.listen(port, function () {
    console.log("server is running on port 8080")
})
