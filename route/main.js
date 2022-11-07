import express from "express";
import connection, {sequelize} from "../database.js";
import jwt from "jsonwebtoken";
import {verifyToken} from "../auth.js";
import {bigComment, bigMenu, member, smallMenu, writing} from "../model.js";


const main = express.Router();


main.get('/writing/list' , async(req, res) => {
    const {smallMenuId} = req.body;
    const writings = await writing.findAll({
        where: {
            smallMenuId,
        },
        limit: 5,
        order: [['createdAt', 'DESC']]
    });

    return res.json(writings);
});

export default main;