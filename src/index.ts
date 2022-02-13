import "reflect-metadata";
import express from 'express';
import { Application } from 'express';
var session = require('express-session');
import * as bodyParser from 'body-parser';
import {createConnection} from "typeorm";
import userRouter from './route/user';
import postRouter from './route/post';
import commentRouter from './route/comment'
import authRouter from './route/auth'
import passportInit from './service/passport';
import googleInit from './service/googleOAuth';
import facebookInit from './service/facebookOAuth'
var cors = require('cors');

const app: Application = express();

createConnection().then(async connection => {

    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({ secret: 'SECRET' }));
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/comments',commentRouter);
    app.use('/auth',authRouter);

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
      });

}).catch(error => console.log(error));
