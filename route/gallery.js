import express from "express";
import connection from "../mysql.js";

const gallery = express.Router();

gallery.get('/writing/list' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
gallery.get('/small-menu/list' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});
gallery.get('/writing/page' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        '',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});


export default gallery;