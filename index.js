const express = require('express');
var exphbs  = require('express-handlebars');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.use('/', require(path.join(__dirname, 'router/blog.js')));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.listen(3000, () => {
    console.log("Blog app listening on port 3000.");
})