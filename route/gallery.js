import express from "express";
import {writing} from "../model.js";

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
gallery.get('/small-menu/list' , (req, res) => {
    
});
gallery.get('/writing/page' , (req, res) => {

});


export default gallery;