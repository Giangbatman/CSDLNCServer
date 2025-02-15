import mongoose from "mongoose";
import dotenv from "./dotenv";
import logger from './logger';

dotenv.config();

const {
    DB_HOST = '127.0.0.1',
    DB_PORT = '27017',
    DB_USER = 'hoangquan',
    DB_PWD = 'hoangquan225.qh',
    DB_NAME = 'my_db'
} = process.env;

const DB_URL = 'mongodb+srv://giangntdev2001:Tgiang2008@@cluster0.4m5fj.mongodb.net/'
// const DB_URL = `mongodb+srv://hoangquan:${DB_PWD}@${DB_USER}.s5rbuw0.mongodb.net/?retryWrites=true&w=majority`;

const connectDatabase = (callback?: () => void) => {
    mongoose
        .connect(DB_URL, {
            dbName: DB_NAME
        })
        .then(() => {
            logger.info("MongoDB connected:", {
                url: DB_URL,
                dbName: DB_NAME
            });
            if (callback) callback();
        })
        .catch((err) => logger.error("MongoDB initial connection error: ", err));

    mongoose.connection.on("error", (err) => {
        console.log("MongoDB error: ", err);
    });
};

export default connectDatabase;
