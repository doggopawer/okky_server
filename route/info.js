import express from "express";
import connection from "../mysql.js";

const info = express.Router();

info.get('/member/rank' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
info.get('/member-tag/list' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
info.post('/member-tag/item' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
info.put('/member/item' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});

export default info;