import express from "express";
import connection from "../mysql.js";
import jwt from "jsonwebtoken";
import {verifyToken} from "../jwt.js";

const main = express.Router();

main.get('/writing/list' , (req, res) => {
    const { memberId } = req.body
    const token = req.header('Authorization');
    verifyToken(token) ?
    connection.query(
        'SELECT * FROM writing',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    ) : res.json({message: "토큰 오염"});
});
main.get('/member/item' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});

export default main;