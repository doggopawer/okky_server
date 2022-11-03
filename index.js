import express, {urlencoded} from 'express';
import connection from  './mysql.js';
import writing from "./router/writings.js";
import member from "./router/member.js";
import helmet from "helmet";
import morgan from "morgan";
import writingTag from "./router/writingTag.js";
const app = express()

connection.connect();

app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/writing', writing);
app.use('/member', member);
app.use('/writingTag', writingTag);

app.listen(3000);

