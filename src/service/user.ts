import { User } from "../entity/user";
const bcrypt = require("bcryptjs");
import * as jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_OR_KEY;
//const EXPIRE_TIME = process.env.EXPIRE_TIME;

const register = async function (newUser: User) {
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hashed;
    newUser.createdTime = new Date();
    let user = await User.create(newUser).save();
}

const findUserByEmail = async function(email : string){
      return User.findOne({email : email})
}

const findUserById = async function(Id : number){
    return User.findOne(Id)
}

const createJWTToken = async function(user){
   const payload = {
      id: user.id,
      exp: Math.floor(Date.now() / 1000) + 2 * 60 * 60,
    };
    const token =  jwt.sign(payload, SECRET_KEY);

    return token;
}

export { register,findUserByEmail,createJWTToken,findUserById};
