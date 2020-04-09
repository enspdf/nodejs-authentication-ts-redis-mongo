import { ConnectionOptions } from "mongoose";
import { IN_PROD } from "./app";

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST = "localhost",
    MONGO_PORT = 27017,
    MONGO_DATABASE = "auth",
} = process.env;

export const MONGO_URI = IN_PROD
    ? `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
    : `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const MONGO_OPTIONS: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
