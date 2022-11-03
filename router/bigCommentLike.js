import express from "express";
import connection from "../mysql.js";
import writingLike from "./writingLike.js";

const bigCommentLike = express.Router();

bigCommentLike.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM big_comment_like\n' +
        'JOIN member ON big_comment_like.member_id = member.id\n' +
        'WHERE member.id = ?;',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
bigCommentLike.get('/article' , (req, res) => {
    const {bigCommentId} = req.body;
    connection.query(
        'SELECT * FROM big_comment_like\n' +
        'JOIN big_comment ON big_comment_like.big_comment_id = big_comment.id\n' +
        'WHERE big_comment.id = ?;',
        [bigCommentId],
        function(err, results) {
            res.json(results);
        }
    );
});

export default bigCommentLike;