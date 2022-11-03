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
writingTag.get('/')


export default writingTag;