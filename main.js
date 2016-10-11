var DB = require("./DBmodule")
var Config = require("./Config")

var Main = {
  db: new DB(),
  add_config: function(name){
    new_config = new Config(name);
    this.db.add(new_config);
  },
  select_config(name){
    var found_config;
    this.db.data.some(function(config){
      if (config.name == name) { found_config = config }
    })
    return found_config;
  }
}

module.exports = Main;

