import express from "express";
import connection from "../mysql.js";

const main = express.Router();

main.get('/writing/list' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
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