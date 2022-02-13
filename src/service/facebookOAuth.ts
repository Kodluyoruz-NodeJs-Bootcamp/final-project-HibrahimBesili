var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
import * as dotenv from 'dotenv';
import { findUserByEmail } from "../service/user"
import { User } from '../entity/user';

export default function facebookInit() {
    passport.use(new FacebookStrategy({
        clientID: process.env['FACEBOOK_CLIENT_ID'],
        clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails[0].value;
            const user = await findUserByEmail(email);

            if (!user) {
                const newUser = {
                    userName: profile.displayName,
                    email: profile.emails[0].value,
                    firstName: profile.displayName,
                    lastName: profile.displayName,
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
