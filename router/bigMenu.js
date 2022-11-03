import express from "express";
import connection from "../mysql.js";

const bigMenu = express.Router();

bigMenu.get('/main' , (req, res) => {
    const {bigMenuName} = req.body;
    connection.query(
        'SELECT * FROM big_menu;',
        [bigMenuName],
        function(err, results) {
            res.json(results);
        }
    );
});


export default bigMenu;