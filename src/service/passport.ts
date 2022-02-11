import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {findUserById} from './user'

export default function init() {
const SECRET_KEY = process.env.SECRET_OR_KEY;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

passport.use(
  new Strategy(options, async (payload, done) => {
    const user = await findUserById(payload.id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);
}
