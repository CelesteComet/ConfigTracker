var main = require("../main")

exports.index = function(req, res){
  res.render('main.handlebars', {data: main.db.data});
};

exports.add_config = function(req, res){
  var data = req.body;

  main.add_config(data.config_name);

  res.render('main.handlebars', {data: main.db.data});
};

exports.os_view = function(req, res){
  res.render('main.handlebars', {data: main.db.data});
};

exports.config_info = function(req, res){
  // data = {config_name: "something"}
  var data = req.body;
  var my_config = main.select_config(data.config_name);
  console.log(data);

  res.render('main.handlebars', {data: main.db.data, config: my_config});

}