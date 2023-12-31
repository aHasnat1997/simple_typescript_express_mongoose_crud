import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    databaseURL: process.env.PROD_DB_URL,
    bcrypt_salt: process.env.BCRYPT_SALT
};