import express from "express";
import connection from "../mysql.js";

const member = express.Router();

member.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM `member` WHERE `id` = ?',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
member.get('/main' , (req, res) => {
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