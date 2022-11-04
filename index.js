import express, {urlencoded} from 'express';
import connection from  './mysql.js';
import helmet from "helmet";
import morgan from "morgan";
import common from "./route/common.js";
import account from "./route/account.js";
import main from "./route/main.js";
import gallery from "./route/gallery.js";
import article from "./route/article.js";
import info from "./route/info.js";
import activity from "./route/activity.js";
const app = express()

connection.connect();

app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/common', common);
app.use('/account', account);
app.use('/main', main);
app.use('/gallery', gallery);
app.use('/article', article);
app.use('/info', info);
app.use('/activity', activity);


app.listen(3000);

