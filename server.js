var methodOverride = require("method-override");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");


var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Import routes and give the server access to them.

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});