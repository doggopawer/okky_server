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
writing.get('/')


export default writing;