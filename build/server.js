"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbinit_1 = require("./utils/dbinit");
const phones_1 = require("./routes/phones");
const tablets_1 = require("./routes/tablets");
const accessories_1 = require("./routes/accessories");
const PORT = 3000;
const server = (0, express_1.default)();
(0, dbinit_1.dbinit)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use('/phones', phones_1.router);
server.use('/tablets', tablets_1.router);
server.use('/accessories', accessories_1.router);
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is Running on http://localhost:${PORT}`);
});
