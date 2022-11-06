import express from "express";
import connection from "../database.js";
import jwt from "jsonwebtoken";
import {createToken} from "../auth.js";

const account = express.Router();

account.post('/member/sign-up' , (req, res) => {

});
account.post('/member/sign-in' , (req, res) => {

});
account.post('/member/find-account' , (req, res) => {

});


export default account;