"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');
const dotenv = __importStar(require("dotenv"));
const user_1 = require("../service/user");
const user_2 = require("../entity/user");
dotenv.config();
function googleInit() {
    passport.use(new GoogleStrategy({
        clientID: process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        try {
            const email = refreshToken.emails[0].value;
            const user = yield user_1.findUserByEmail(email);
            if (!user) {
                const newUser = {
                    userName: refreshToken.displayName,
                    email: refreshToken.emails[0].value,
                    firstName: refreshToken.name.givenName,
                    lastName: refreshToken.name.familyName,
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
exports.default = googleInit;
//# sourceMappingURL=googleOAuth.js.map