import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";
import { register, login, home } from "./routes";
import { internalServerError, notFound, active, catchAsync } from "./middleware";

export const createApp = (store: Store) => {
    const app = express();
    app.use(express.json());

    app.use(session({
        ...SESSION_OPTIONS,
        store
    }));

    app.use(catchAsync(active));
    app.use(register);
    app.use(login);
    app.use(home)

    app.use(notFound);
    app.use(internalServerError);

    return app;
}