"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    if (req.url === "/view-image") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("hello");
        return;
    }
});
var PORT = 3000;
server.listen(PORT, function () {
    console.log("Server is running on port:".concat(PORT));
});
