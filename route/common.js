import express from "express";
import connection from "../database.js";
import {bigMenu} from "../model.js";

const common = express.Router();

common.get('/writing-tag/rank' , (req, res) => {

});
common.get('/big-menu/list' , async(req, res) => {
    const bigMenus = await bigMenu.findAll();
    return res.json(bigMenus);
});
common.get('/member/rank' , (req, res) => {

});


export default common;