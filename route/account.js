import express from "express";
import connection from "../database.js";
import jwt from "jsonwebtoken";
import {createToken} from "../auth.js";
import {member} from "../model.js";

const account = express.Router();

account.post('/member/sign-up' , async(req, res) => {
    const {email, password, name, nick, marketing_yn, profile_url } = req.body;

    const newMember = await member.create({
        email,
        password,
        name,
        nick,
        marketing_yn,
        activity_score: 0,
        admin_yn: true,
        profile_url,
    });
    return res.json(newMember);
});
account.post('/member/already-exist' , async(req, res) => {

});


account.post('/member/sign-in' , async(req, res) => {
    // 바디 받기
    const {email, password} = req.body;
    // 바디의 패스워드와, 디비의 패스워드를 비교한다.
    const memberOne = await member.findOne({ where: { email }});
    const dbPassword = memberOne.password;

    if(password === dbPassword) {
        return res.json(createToken(email));
    }
    return res.json("비밀번호 불일치");
});
account.post('/member/find-account' , (req, res) => {

});


export default account;