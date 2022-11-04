import express from "express";
import connection from "../mysql.js";

const account = express.Router();

account.post('/member/sign-up' , (req, res) => {
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
account.post('/member/sign-in' , (req, res) => {
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
account.post('/member/find-account' , (req, res) => {
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


export default account;