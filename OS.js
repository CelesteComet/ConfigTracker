var id = 0;

function OS(name, image_location){
  this.name = name;
  this.image_location = image_location;
  this.last_updated = null;
  this.in_progress = false;
  this.id = id;
  id++
};

OS.prototype = {
  constructor: OS,
  update: function(){
    this.last_updated = new Date();
  },
  require_update: function(){
    var todays_date = new Date();

    if (this.last_updated == undefined || ( todays_date.getDate() > this.last_updated.getDate() + 30 ) ){
      return true;
    }
    else {
      return false;
    };
  }
};

module.exports = OS;