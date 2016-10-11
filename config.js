var OS = require('./OS')

function Config(name, os){
  this.name = name;
  this.os = [];
  return this;
}

Config.prototype = {
  constructor: Config,
  get_os: function(target_os){
    var found_os;
    this.os.some(function(os){
      if (target_os == os.name){ 
        found_os = os; 
      };
    });
    return found_os;
  },
  add_os: function(os_name, image_location){
    var new_os = new OS(os_name, image_location);
    this.os.push(new_os);
  }
}

module.exports = Config;



