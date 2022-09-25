const express = require("express");
const bodyParser = require("body-parser");

const port= 3000;

const app = express();

//array is delcared outside of app.post and app.get for scope reasons
let items = ["Study", "Gym"];
let workItems = [];
//Using EJS with Express
//this sets our app's view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

//when using express, it doesn't serve up all the files (only app.js and views folder)
//any file that you want to be used, must be served by the server even if the file exists
//if we want to use the css file for our website we must explicitly tell express the location of the folder (public)
app.use(express.static("public"));

app.get("/", (req, res) => {

 //set today equal to current date
 let today = new Date();

 //specifically picking out what we want to incude and how we want the date to be dislayed
 let options = { 
  weekday: "long",  
  month: "long", 
  day: "numeric", 
 };
 
 //we use toLocaleDateString to enable make this work in addition to adding certain parameters
 let day = today.toLocaleDateString("en-US", options);

 console.log(day);

 //dayOfWeek(html): day(js), newListItems(html): items(js)
 res.render("list", { listTitle: day, newListItems: items });
 
});

//when the post route is triggered
app.post("/", (req, res) => {

 //it will save the value of the newItem and pass it to the item variable.
 let item = req.body.newItem;

 if(req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
 } else {
   //where item is then pushed into the items array
 //items is equal to newListItems which is an array located inside of html
  items.push(item);
  //it will redirect to the home route, which will trigger the app.get
  res.redirect("/");
 }
 console.log(req.body);
});

app.get("/work", (req, res) => {
 res.render("list", {listTitle: "Work", newListItems: workItems}); 
});

app.get("/about", (req, res) => {
 res.render("about");
})

app.listen(port, () => {
 console.log("Server started on port 3000");
});