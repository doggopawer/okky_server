import express from "express";
import connection, {sequelize} from "../database.js";
import jwt from "jsonwebtoken";
import {verifyToken} from "../auth.js";

import '../model.js';

const main = express.Router();


main.get('/writing/list' , (req, res) => {
});
main.get('/member/item' , (req, res) => {
});

export default main;