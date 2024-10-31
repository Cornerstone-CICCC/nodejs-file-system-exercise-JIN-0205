"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imgPath = path_1.default.join(__dirname, "./images/veryhappydog.jpg");
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("This is Home page");
    }
    if (req.url === "/view-image") {
        fs_1.default.readFile(imgPath, (err, data) => {
            if (err) {
                console.error(err);
            }
            else {
                res.writeHead(200, { "content-type": "image/jpeg" });
                res.end(data);
            }
        });
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
