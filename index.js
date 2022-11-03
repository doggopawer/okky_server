import express, {urlencoded} from 'express';
import connection from  './mysql.js';
import writing from "./router/writing.js";
import member from "./router/member.js";
import helmet from "helmet";
import morgan from "morgan";
import writingTag from "./router/writingTag.js";
import smallMenu from "./router/smallMenu.js";
import bigComment from "./router/bigComment.js";
import smallComment from "./router/smallComment.js";
import writingLike from "./router/writingLike.js";
import bigCommentLike from "./router/bigCommentLike.js";
import smallCommentLike from "./router/smallCommentLike.js";
import scrap from "./router/scrap.js";
import memberTag from "./router/memberTag.js";
import bigMenu from "./router/bigMenu.js";
const app = express()

connection.connect();

app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/big-menu', bigMenu);
app.use('/smallMenu', smallMenu);
app.use('/writing', writing);
app.use('/writingTag', writingTag);
app.use('/writingLike', writingLike);
app.use('/member', member);
app.use('/memberTag', memberTag);
app.use('/bigComment',bigComment);
app.use('/bigCommentLike', bigCommentLike);
app.use('/smallComment', smallComment);
app.use('/smallCommentLike', smallCommentLike);
app.use('/scrap', scrap);

app.listen(3000);

