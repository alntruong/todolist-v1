exports.getDate = function() {

 //specifically picking out what we want to incude and how we want the date to be dislayed
 const today = new Date();

 const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
 };

 //we use toLocaleDateString to enable make this work in addition to adding certain parameters
 return today.toLocaleDateString("en-US", options);

 return day;
};

exports.getDay = function() {

 const today = new Date();

 const options = {
  weekday: "long"
 };

 return today.toLocateDateString("en-US", options);
};

//the module free varaiable