import express from "express";
import {smallMenu, writing} from "../model.js";

const gallery = express.Router();

gallery.get('/writing/list' , async(req, res) => {
    const { smallMenuId, orderBy } = req.body;

    const writings = await writing.findAll({
        where: {
            smallMenuId,
        },
        limit: 20,
        order: [[orderBy , 'DESC']]
    })

    return res.json(writings);
});
gallery.get('/small-menu/lnb' , async(req, res) => {
    const { bigMenuId } = req.body;

    const smallMenus = await smallMenu.findAll({
        where: {
            bigMenuId,
        }
    })

    return res.json(smallMenus);
});
gallery.get('/writing/page' , async(req, res) => {
    const { smallMenuId } = req.body;

    // 레코드 양 구하기
    const smallMenuAmount = await writing.findAll({
        where: {
            smallMenuId,
        }
    });

    return res.json({
        "smallMenuAmount": smallMenuAmount.length,
    })


});


export default gallery;