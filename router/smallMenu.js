import express from "express";
import connection from "../mysql.js";

const smallMenu = express.Router();

smallMenu.get('/gallery' , (req, res) => {
    const {bigMenuName} = req.body;
    connection.query(
        'SELECT sm.name FROM small_menu sm\n' +
        'JOIN big_menu bm ON sm.big_menu_id = bm.id\n' +
        'WHERE bm.name = ?;',
        [bigMenuName],
        function(err, results) {
            res.json(results);
        }
    );
});


export default smallMenu;