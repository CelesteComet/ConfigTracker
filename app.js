var express = require("express");
var app     = express();
var path    = require("path");
var handlebars = require('handlebars');
var routes = require("./routes/routes.js");
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");

/*
main
  add_config(config_name)
*/

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));

app.engine = handlebars;
app.use(express.static('public'));

app.get('/', routes.index);

app.post('/add', routes.add_config);
app.get('/config_info', routes.config_info);




app.listen(3000);

console.log("Running at Port 3000");