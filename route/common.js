import express from "express";
import connection from "../mysql.js";

const common = express.Router();

common.get('/writing-tag/rank' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
common.get('/big-menu/list' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
common.get('/member/rank' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});


export default common;