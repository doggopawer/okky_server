import express from 'express';
import connection from  './mysql.js';
import writing from "./router/writings.js";
const app = express()

connection.connect();

app.use('/writing', writing);
// create the connection to database
// const connection = mysql.createConnection(mysqlConfig);
//
// connection.connect();
//
// connection.query('SELECT * FROM member', function (error, results, fields) {
//         if(error) {
//             console.log(error);
//         }
//         console.log(results);
//     }
// );

app.listen(3000);

