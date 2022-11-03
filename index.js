import express from 'express';
import mysql  from 'mysql2';
import { mysqlConfig } from './environment.js';
const app = express()

// create the connection to database
const connection = mysql.createConnection(mysqlConfig);

connection.connect();

connection.query('SELECT * FROM member', function (error, results, fields) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    }
);

app.get('/', function (req, res) {
    res.send('Hello World')
})



app.listen(3000);

