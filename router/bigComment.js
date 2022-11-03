import express from "express";
import connection from "../mysql.js";
import writing from "./writing.js";

const bigComment = express.Router();

bigComment.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM big_comment\n' +
        'JOIN member ON big_comment.member_id = member.id\n' +
        'WHERE member.id = ?',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
bigComment.get('/article' , (req, res) => {
    const {writingId} = req.body;
    connection.query(
        'SELECT * FROM big_comment\n' +
        'JOIN writing ON big_comment.writing_id = writing.id\n' +
        'WHERE writing.id = ?;',
        [writingId],
        function(err, results) {
            res.json(results);
        }
    );
});





export default bigComment;