"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const ping_1 = require("./controller/ping");
const postRouter_1 = require("./routes/postRouter");
const userRouter_1 = require("./routes/userRouter");
app_1.app.use('/users', userRouter_1.userRouter);
app_1.app.use('/posts', postRouter_1.postRouter);
app_1.app.get('/ping', ping_1.ping);
//# sourceMappingURL=index.js.map