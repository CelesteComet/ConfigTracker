window.onload = function(){
  alert("HI");
  // get the shit
  var source = document.getElementById("entry-template").innerHTML;
  console.log(source)
  var template = Handlebars.compile(source);
  
  var context = {title: "My New Post", body: "This is my first post!"};
  var html    = template(context);

  document.getElementById("config_list").innerHTML = html;
  // compile the shit
  // render the shit
}


