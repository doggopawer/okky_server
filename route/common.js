import express from "express";
import connection from "../database.js";
import {bigMenu, member} from "../model.js";

const common = express.Router();

common.get('/writing-tag/rank' , (req, res) => {

});
common.get('/big-menu/gnb' , async(req, res) => {
    const bigMenus = await bigMenu.findAll();
    return res.json(bigMenus);
});
common.get('/member/rank' , (req, res) => {

});
common.get('/member/profile' , async(req, res) => {
    const { email } = req.body;
    const memberOne = await member.findOne({ where: { email }});
    return res.json(memberOne);
});


export default common;