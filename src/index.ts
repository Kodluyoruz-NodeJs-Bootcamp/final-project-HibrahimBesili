import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import {createConnection} from "typeorm";
import userRouter from './route/user';

const app: Application = express();

createConnection().then(async connection => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Halil";
    // user.lastName = "Besili";
    // user.userName = "halil05"
    // user.password = "12345"
    // user.createdTime = new Date();
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

    app.use('/users', userRouter);

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
      });

}).catch(error => console.log(error));
