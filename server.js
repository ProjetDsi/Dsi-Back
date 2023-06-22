const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');

const app = express();
const myConnection = require('express-myconnection');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'dsi_sensibilisation'
  })
  
  module.exports = {app, port, connection}