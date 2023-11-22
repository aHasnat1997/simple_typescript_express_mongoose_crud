import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    databaseURL: process.env.DEV_DB_URL
};