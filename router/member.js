import express from "express";
import connection from "../mysql.js";

const member = express.Router();

member.get('/' , (req, res) => {
    connection.query(
        'SELECT * FROM `member` WHERE `id` = ?',
        ['doggopawer'],
        function(err, results) {
            res.send(results);
        }
    );
});
member.get('/rank' , (req, res) => {
    connection.query(
        'SELECT nick,activity_score FROM member\n' +
        'ORDER BY activity_score DESC \n' +
        'LIMIT 5',
        function(err, results) {
            res.send(results);
        }
    );
});



export default member;