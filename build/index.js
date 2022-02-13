"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
var session = require('express-session');
const bodyParser = __importStar(require("body-parser"));
const typeorm_1 = require("typeorm");
const user_1 = __importDefault(require("./route/user"));
const post_1 = __importDefault(require("./route/post"));
const comment_1 = __importDefault(require("./route/comment"));
const auth_1 = __importDefault(require("./route/auth"));
var cors = require('cors');
const app = express_1.default();
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({ secret: 'SECRET' }));
    app.use('/users', user_1.default);
    app.use('/posts', post_1.default);
    app.use('/comments', comment_1.default);
    app.use('/auth', auth_1.default);
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
    });
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map