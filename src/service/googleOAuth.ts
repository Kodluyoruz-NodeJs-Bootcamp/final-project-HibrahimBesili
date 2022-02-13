var passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');
import * as dotenv from 'dotenv';
import { findUserByEmail } from "../service/user"
import { User } from '../entity/user';

dotenv.config();

export default function googleInit() {
  passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: '/auth/google/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const email = refreshToken.emails[0].value;
      const user = await findUserByEmail(email);

      if (!user) {
        const newUser = {
          userName: refreshToken.displayName,
          email: refreshToken.emails[0].value,
          firstName: refreshToken.name.givenName,
          lastName: refreshToken.name.familyName,
          createdTime: new Date()
        };

        let newuser = await User.create(newUser).save();
        done(null, newuser);
      }
      else {
        done(null, user);
      }

    } catch (error) {
      done(error, false, error.message);
    }

  }
  ));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
}
