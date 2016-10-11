var fs = require("fs");

function DB(){
  this.created_at = new Date();
  return this;
};

DB.prototype = {
  data: JSON.parse(fs.readFileSync("input.json")),
  constructor: DB,
  init: function(){
    fs.writeFileSync("input.json", JSON.stringify(this.data));
  },
  update: function(){
    fs.writeFileSync("input.json", JSON.stringify(this.data));
  },
  add: function(obj){
    this.data.push(obj);
    this.update();
  },
  select: function(obj_name){
    var find;
    this.data.some(function(obj){
      if (obj_name == obj.name) { find = obj }
    });
    return find;
  }
}

module.exports = DB;