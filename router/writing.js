import express from "express";
import connection from "../mysql.js";

const writing = express.Router();

writing.get('/main' , (req, res) => {
    const {smallMenuName} = req.body;
    connection.query(
        'SELECT * FROM writing w\n' +
        'JOIN member m ON w.member_id = m.id\n' +
        'JOIN small_menu sm on w.small_menu_id = sm.id\n' +
        'WHERE sm.name = ?\n' +
        'ORDER BY w.created_at\n' +
        'LIMIT 5;',
        [smallMenuName],
        function(err, results) {
            res.json(results);
        }
    );
});
writing.get('/gallery/date' , (req, res) => {
    const {smallMenuName} = req.body;
    connection.query(
        'SELECT member.nick, small_menu.name,writing.title FROM writing\n' +
        'JOIN small_menu ON writing.small_menu_id = small_menu.id\n' +
        'JOIN member ON writing.member_id = member.id\n' +
        'WHERE small_menu.name=? \n' +
        'ORDER BY writing.created_at DESC\n' +
        'LIMIT 20;',
        [smallMenuName],
        function(err, results) {
            res.json(results);
        }
    );
});
writing.get('/gallery/views' , (req, res) => {
    const {smallMenuName} = req.body;
    connection.query(
        'SELECT member.nick, small_menu.name,writing.title FROM writing\n' +
        'JOIN small_menu ON writing.small_menu_id = small_menu.id\n' +
        'JOIN member ON writing.member_id = member.id\n' +
        'WHERE small_menu.name=? \n' +
        'ORDER BY writing.views DESC\n' +
        'LIMIT 20;',
        [smallMenuName],
        function(err, results) {
            res.json(results);
        }
    );
});
writing.get('/my' , (req, res) => {
    const {memberId} = req.body;
    connection.query(
        'SELECT * FROM writing\n' +
        'JOIN member ON writing.member_id = member.id\n' +
        'WHERE member.id = ?;',
        [memberId],
        function(err, results) {
            res.json(results);
        }
    );
});
writing.get('/article' , (req, res) => {
    const {writingId} = req.body;
    connection.query(
        'SELECT * FROM writing\n' +
        'JOIN member ON writing.member_id = member.id\n' +
        'WHERE writing.id = ?;',
        [writingId],
        function(err, results) {
            res.json(results);
        }
    );
});



export default writing;