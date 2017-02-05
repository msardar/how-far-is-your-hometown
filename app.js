//Starting point of the app
//Requiring modules
var express = require('express')
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var routes = require('./api/routes');

//Defining port
app.set('port', 3000);

// Add middleware to console log every request
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, err) {
    console.log("Get the homepage")

})
// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Listening on port: ' + port);
});
