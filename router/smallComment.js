import express from "express";
import connection from "../mysql.js";

const smallComment = express.Router();

smallComment.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM small_comment\n' +
        'JOIN member ON small_comment.member_id = member.id\n' +
        'WHERE member.id = ?;',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
smallComment.get('/article' , (req, res) => {
    const {bigCommentId} = req.body;
    connection.query(
        'SELECT small_comment.description FROM small_comment\n' +
        'JOIN big_comment ON small_comment.big_comment_id = big_comment.id\n' +
        'WHERE big_comment.id = ?;',
        [bigCommentId],
        function(err, results) {
            res.json(results);
        }
    );
});


export default smallComment;