import express from "express";
import connection from "../database.js";

const article = express.Router();

article.get('/writing/item' , (req, res) => {

});
article.get('/big-comment/list' , (req, res) => {

});
article.get('/small-comment/list' , (req, res) => {

});
article.get('/writing-tag/list' , (req, res) => {

});
article.get('/writing-like/amount' , (req, res) => {

});
article.get('/big-comment-like/amount' , (req, res) => {

});
article.get('/small-comment-like/amount' , (req, res) => {

});
article.post('/big-comment/item' , (req, res) => {

});
article.post('/small-coment/item' , (req, res) => {

});
article.post('/writing-like/item' , (req, res) => {

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