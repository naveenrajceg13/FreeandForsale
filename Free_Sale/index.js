var express=require('express');
var mongoose = require('mongoose');
var database = require('./config/database'); 			// load the database config
var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var app=express();
var handlebar="";

mongoose.connect(database.url);
handlebars=require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use('/app',express.static(__dirname+ '/app'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));

app.set('port',process.env.PORT||3000);
app.use(express.static(__dirname+'/public'));
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


require('./app/routes.js')(app);

app.listen(app.get('port'),function(){
   console.log('listening in port'); 
}); 