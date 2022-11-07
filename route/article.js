import express from "express";
import connection from "../database.js";
import {bigComment, smallComment, writing, writingLike} from "../model.js";

const article = express.Router();

article.get('/writing/item' , async(req, res) => {
    const { writingId } = req.body;
    const writingOne = await writing.findOne({ where: { id: writingId } });
    return res.json(writingOne);
});
article.get('/big-comment/list' , async(req, res) => {
    const { writingId } = req.body;
    const bigComments = await bigComment.findAll({
        where: {
            writingId
        }
    })
    return res.json(bigComments);
});
article.get('/small-comment/list' , async(req, res) => {
    const { bigCommentId } = req.body;
    const smallComments = await smallComment.findAll({
        where: {
            bigCommentId
        }
    })
    return res.json(smallComments);
});
article.get('/writing-like/amount' , async(req, res) => {
    const { writingId } = req.body;
    const writingLikes = await writingLike.findAll({
        where: {
            writingId
        }
    })
    let result = 0;

    for(const item of writingLikes) {
        if(item.like_type === "up") {
            result++;
        } else {
            result--;
        }
    }
    return res.json({ result })
});
article.get('/big-comment-like/amount' , (req, res) => {

});
article.get('/small-comment-like/amount' , (req, res) => {

});

article.get('/writing-tag/list' , (req, res) => {

});


article.post('/big-comment/item' , async(req, res) => {
    const {description, writingId, email} = req.body;
    const newBigComment = await bigComment.create({
        description,
        adopt_yn: false,
        updated_yn: false,
        writingId,
        email,
    })
    return res.json(newBigComment);
});
article.post('/small-comment/item' , async(req, res) => {
    const {description, bigCommentId, email} = req.body;
    const newSmallComment = await smallComment.create({
        description,
        updated_yn: false,
        bigCommentId,
        email,
    })
    return res.json(newSmallComment);
});
article.post('/writing-like/item' , async(req, res) => {
    const {likeType, writingId, email} = req.body;
    const newWritingLike = await writingLike.create({
        like_type: likeType,
        writingId,
        email
    })
    return res.json(newWritingLike);
});
article.post('/big-comment-like/item' , (req, res) => {

});
article.post('/small-comment-like/item' , (req, res) => {

});
article.delete('/writing/item' , (req, res) => {

});
article.delete('/big-comment/item' , (req, res) => {

});
article.delete('/small-comment/item' , (req, res) => {

});
article.delete('/writing-like/item' , (req, res) => {

});
article.delete('/big-comment-like/item' , (req, res) => {

});
article.delete('/small-comment-like/item' , (req, res) => {

});
article.put('/big-comment/adopt' , (req, res) => {

});
// 아티클 생성 페이지
article.post('/writing/item' , (req, res) => {

});
article.post('/writing-tag/item' , (req, res) => {

});
article.delete('/writing-tag/item' , (req, res) => {

});
// 아티클 수정 페이지
article.put('/writing/item' , (req, res) => {

});




export default article;