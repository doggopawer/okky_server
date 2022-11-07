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
main.get('/member/item' , async(req, res) => {
    const newWriting = await writing.create({
        title : "테스트 글5",
        description: "테스트 내용5",
        views: 0,
        updated_yn: false,
        smallMenuId: 1,
        memberId: 1,
    })
    return res.json(newWriting);

});

export default main;