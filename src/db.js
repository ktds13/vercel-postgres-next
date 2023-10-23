import { Pool } from "pg";
import {DB_USER, DB_PASSWORD,DB_NAME,DB_HOST,DB_PORT} from "../appsettings";



const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database:DB_NAME ,
    password:DB_PASSWORD ,
    port: DB_PORT
});

module.exports = pool;