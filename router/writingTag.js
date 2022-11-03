import express from "express";
import connection from "../mysql.js";

const writingTag = express.Router();

writingTag.get('/rank' , (req, res) => {
    connection.query(
        'SELECT name, COUNT(name) amount FROM writing_tag\n' +
        'GROUP BY name\n' +
        'ORDER BY amount DESC\n' +
        'LIMIT 5',
        [],
        function(err, results) {
            res.send(results);
        }
    );
});
writingTag.get('/article' , (req, res) => {
    const { writingId } = req.body;
    connection.query(
        'SELECT * FROM writing_tag\n' +
        'JOIN writing ON writing_tag.writing_id = writing.id\n' +
        'WHERE writing.id= ?;',
        [writingId],
        function(err, results) {
            res.send(results);
        }
    );
});

export default writingTag;