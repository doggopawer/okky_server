import express from "express";
import connection from "../mysql.js";

const memberTag = express.Router();


memberTag.get('/article' , (req, res) => {
    const { memberId } = req.body;
    connection.query(
        'SELECT member_tag.name FROM member_tag\n' +
        'JOIN member ON member_tag.member_id = member.id\n' +
        'WHERE member.id= ?;',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});

export default memberTag;