import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import { register, findUserByEmail, createJWTToken } from "../service/user"
var bcrypt = require('bcryptjs');

const router: Router = Router();

export const createUser = async (req: Request, res: Response) => {
 
  const newUser = { ...req.body };
 
  try {
    const user = await findUserByEmail(newUser.email);

    if (user) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({ errors: [ {msg: "User already exists"}] });
    }
    else {
      const user = await register(newUser);
      res.status(HttpStatusCodes.CREATED).send(user);
    }
  } catch (error) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ auth: false, message: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const newUser = { ...req.body };

    const user = await findUserByEmail(newUser.email);

  if (!user) {
    res.status(400).send({ message: 'Invalid email or password' });
  } else {
    const isMatch = await bcrypt.compare(newUser.password, user.password);

    if (isMatch) {
      const token = await createJWTToken(user);
      res.status(HttpStatusCodes.OK).send({ token });
    } else {
      res.status(HttpStatusCodes.BAD_REQUEST).send({ message: 'Invalid email or password' });
    }
  }
};

export const googleLogin = async (req: Request, res: Response) => {
      const User = {...req["user"]}
      const token = await createJWTToken(User);
      res.status(HttpStatusCodes.OK).send({ token });
  };

  export const facebookLogin = async (req: Request, res: Response) => {
    const User = {...req["user"]};
    console.log("Facebook Login User:",User);
    const token = await createJWTToken(User);
    res.status(HttpStatusCodes.OK).send({ token });
};

 
