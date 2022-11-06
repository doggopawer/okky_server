import { mysqlConfig } from './environment.js';
import SQ from 'sequelize';


const { host, user, database, password } = mysqlConfig;

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mysql'
})


export default sequelize;