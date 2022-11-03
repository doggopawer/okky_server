import express from "express";
import connection from "../mysql.js";

const scrap = express.Router();

scrap.get('/my' , (req, res) => {
    const { memberId } = req.body
    connection.query(
        'SELECT * FROM  scrap\n' +
        'JOIN writing ON scrap.writing_id = writing.id\n' +
        'JOIN member ON scrap.member_id = member.id\n' +
        'WHERE member.id= ?',
        [memberId],
        function(err, results) {
            res.send(results);
        }
    );
});

export default scrap;