import express from "express";
import connection from "../database.js";

const gallery = express.Router();

gallery.get('/writing/list' , (req, res) => {

});
gallery.get('/small-menu/list' , (req, res) => {

});
gallery.get('/writing/page' , (req, res) => {

});


export default gallery;