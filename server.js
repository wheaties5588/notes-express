var express = require("express");

//Invoke express and set to app variable for use
var app = express();

//Create port variable
var PORT = process.env.PORT || 8080;

//Middleware to allow json parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes for home and notes pages
require("./routes/indexRoutes")(app);
require("./routes/noteRoutes")(app);



app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})