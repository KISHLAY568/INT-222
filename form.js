// import fs from "fs";
// import http from "http";
// import url from "url";
// import querystring from "querystring";
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const path = "form.html";

  if (req.method === "GET" && req.url === "/") {
    // const readableStream=fs.createReadStream('temp23.html');
    // // const writableStream=fs.createWriteStream('output.txt');
    // readableStream.pipe(res);
    // res.end();
    const data = fs.readFileSync(path, "utf-8");
    res.end(data);
  } else if (req.method === "POST" && reqUrl.pathname === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const formData = querystring.parse(body);
      const writableStream = fs.createWriteStream("form.txt");
      writableStream.write(JSON.stringify(formData));
      res.end("Form data has been saved.");
    });
  }
});

const port = 3000;
server.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
