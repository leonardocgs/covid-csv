import * as dotenv from 'dotenv';

dotenv.config();
const GOFILE_TOKEN = process.env.GOFILE_TOKEN;
const DB_URI = process.env.DB_URI;
const BRASIL_USA_FOLDER_ID = process.env.BRASIL_USA_FOLDER_ID;
const CHINA_RUSSIA_FOLDER_ID = process.env.CHINA_RUSSIA_FOLDER_ID;

export { GOFILE_TOKEN, DB_URI, BRASIL_USA_FOLDER_ID, CHINA_RUSSIA_FOLDER_ID };
