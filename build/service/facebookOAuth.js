"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
const user_1 = require("../service/user");
const user_2 = require("../entity/user");
function facebookInit() {
    passport.use(new FacebookStrategy({
        clientID: process.env['FACEBOOK_CLIENT_ID'],
        clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email']
    }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        try {
            const email = profile.emails[0].value;
            const user = yield user_1.findUserByEmail(email);
            if (!user) {
                const newUser = {
                    userName: profile.displayName,
                    email: profile.emails[0].value,
                    firstName: profile.displayName,
                    lastName: profile.displayName,
                    createdTime: new Date()
                };
                let newuser = yield user_2.User.create(newUser).save();
                done(null, newuser);
            }
            else {
                done(null, user);
            }
        }
        catch (error) {
            done(error, false, error.message);
        }
    })));
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}
exports.default = facebookInit;
//# sourceMappingURL=facebookOAuth.js.map