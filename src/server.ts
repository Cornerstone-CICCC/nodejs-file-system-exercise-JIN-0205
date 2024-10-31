// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const imgPath = path.join(__dirname, "./images/veryhappydog.jpg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("This is Home page");
  }

  if (req.url === "/view-image") {
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        console.error(err);
      } else {
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
