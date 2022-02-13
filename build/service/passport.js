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
const passport = __importStar(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const user_1 = require("./user");
function passportInit() {
    const SECRET_KEY = process.env.SECRET_OR_KEY;
    const options = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_KEY
    };
    passport.use(new passport_jwt_1.Strategy(options, (payload, done) => __awaiter(this, void 0, void 0, function* () {
        const user = yield user_1.findUserById(payload.id);
        if (user) {
            done(null, user);
        }
        else {
            done(null, false);
        }
    })));
}
exports.default = passportInit;
//# sourceMappingURL=passport.js.map