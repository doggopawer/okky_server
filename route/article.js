import express from "express";
import connection from "../database.js";
import {bigComment, bigCommentLike, member, smallComment, smallCommentLike, writing, writingLike} from "../model.js";

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
article.get('/big-comment-like/amount' , async(req, res) => {
    const { bigCommentId } = req.body;
    const bigCommentLikes = await bigCommentLike.findAll({
        where: {
            bigCommentId
        }
    })
    let result = 0;

    for(const item of bigCommentLikes) {
        if(item.like_type === "up") {
            result++;
        } else {
            result--;
        }
    }
    return res.json({ result });
});
article.get('/small-comment-like/amount' , async(req, res) => {
    const { smallCommentId } = req.body;
    const smallCommentLikes = await smallCommentLike.findAll({
        where: {
            smallCommentId
        }
    })
    let result = 0;

    for(const item of smallCommentLikes) {
        if(item.like_type === "up") {
            result++;
        } else {
            result--;
        }
    }
    return res.json({ result });
});

article.get('/writing-tag/list' , async(req, res) => {
    const {} = req.body;

});


article.post('/big-comment/item' , async(req, res) => {
    const {description, writingId, email} = req.body;

    const memberOne = await member.findOne({ where: { email } });
    const memberId = memberOne.id;

    const newBigComment = await bigComment.create({
        description,
        adopt_yn: false,
        updated_yn: false,
        writingId,
        memberId,
    })
    return res.json(newBigComment);
});
article.post('/small-comment/item' , async(req, res) => {
    const {description, bigCommentId, email} = req.body;

    const memberOne = await member.findOne({ where: { email } });
    const memberId = memberOne.id;

    const newSmallComment = await smallComment.create({
        description,
        updated_yn: false,
        bigCommentId,
        memberId,
    })
    return res.json(newSmallComment);
});
article.post('/writing-like/item' , async(req, res) => {
    const {likeType, writingId, email} = req.body;

    const memberOne = await member.findOne({ where: { email } });
    const memberId = memberOne.id;

    const newWritingLike = await writingLike.create({
        like_type: likeType,
        writingId,
        memberId
    })
    return res.json(newWritingLike);
});
article.post('/big-comment-like/item' , async(req, res) => {
    const {likeType, bigCommentId, email} = req.body;

    const memberOne = await member.findOne({ where: { email } });
    const memberId = memberOne.id;

    const newBigCommentLike = await bigCommentLike.create({
        like_type: likeType,
        bigCommentId,
        memberId,
    })
    return res.json(newBigCommentLike);
});
article.post('/small-comment-like/item' , async(req, res) => {
    const {likeType, smallCommentId, email} = req.body;

    const memberOne = await member.findOne({ where: { email } });
    const memberId = memberOne.id;

    const newSmallCommentLike = await smallCommentLike.create({
        like_type: likeType,
        smallCommentId,
        memberId
    })
    return res.json(newSmallCommentLike);
});
article.delete('/writing/item' , async(req, res) => {
    const {writingId} = req.body;
    await writing.destroy({
        where: {
            id: writingId,
        }
    })
    res.json({ message: `글 ${writingId}번 삭제 완료`})
});
article.delete('/big-comment/item' , async(req, res) => {
    const {bigCommentId} = req.body;
    await bigComment.destroy({
        where: {
            id: bigCommentId,
        }
    })
    res.json({ message: `글 ${bigCommentId}번 삭제 완료`})
});
article.delete('/small-comment/item' , async(req, res) => {
    const {smallCommentId} = req.body;
    await smallComment.destroy({
        where: {
            id: smallCommentId,
        }
    })
    res.json({ message: `글 ${smallCommentId}번 삭제 완료`})
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