import express from "express";
import connection from "../mysql.js";

const writing = express.Router();

writing.get('/' , (req, res) => {
    console.log("GET /writings/")
    connection.query('SELECT * FROM member', function (error, results, fields) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    }
);

    res.send('router 연결 성공')
})

export default writing;