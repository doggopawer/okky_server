import express from "express";
import connection from "../mysql.js";
import smallComment from "./smallComment.js";

const writingLike = express.Router();

writingLike.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM writing_like\n' +
        'JOIN member ON writing_like.member_id = member.id\n' +
        'WHERE member.id = ?;',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
writingLike.get('/article' , (req, res) => {
    const {writingId} = req.body;
    connection.query(
        'SELECT * FROM writing_like\n' +
        'JOIN writing ON writing_like.writing_id = writing.id\n' +
        'WHERE writing.id = ?;',
        [writingId],
        function(err, results) {
            res.json(results);
        }
    );
});

export default writingLike;