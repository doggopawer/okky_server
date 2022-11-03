import mysql  from 'mysql2';
import { mysqlConfig } from './environment.js';
const connection = mysql.createConnection(mysqlConfig);




export default connection;