import { User } from "../entity/user";
const bcrypt = require("bcryptjs");
import * as jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_OR_KEY;
const EXPIRE_TIME = process.env.EXPIRE_TIME;

const register = async function (newUser: User) {
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hashed;
    newUser.createdTime = new Date();
    let user = await User.create(newUser).save();
}

const findUserByUserName = async function(userName : string){
      return User.findOne({userName : userName})
}

const createJWTToken = async function(user : User){
   const payload = {
      id: user.id,
      name: user.userName
    };
    const token =  jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRE_TIME });

    return token;
}

export { register,findUserByUserName,createJWTToken};
