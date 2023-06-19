const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json);


app.listen(port, ()=> console.log(`notre appli est démarrée sur le port : ${port}` ));