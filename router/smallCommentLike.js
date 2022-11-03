import express from "express";
import connection from "../mysql.js";

const smallCommentLike = express.Router();

smallCommentLike.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM small_comment_like\n' +
        'JOIN member ON small_comment_like.member_id = member.id\n' +
        'WHERE member.id = ?;',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
smallCommentLike.get('/article' , (req, res) => {
    const {smallCommentId} = req.body;
    connection.query(
        'SELECT * FROM small_comment_like\n' +
        'JOIN small_comment ON small_comment_like.small_comment_id = small_comment.id\n' +
        'WHERE small_comment.id = ?;',
        [smallCommentId],
        function(err, results) {
            res.json(results);
        }
    );
});

export default smallCommentLike;