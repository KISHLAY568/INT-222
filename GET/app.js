const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
http
  .createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    console.log(parsedURL);
    console.log(parsedURL.query.name);
    if (parsedURL.pathname == "/") {
      let readableStream = fs.createReadStream("GET/index.html");
      readableStream.pipe(res);
    } else if (parsedURL.pathname == "/submit" && req.method == "GET") {
      let writableStream = fs.createWriteStream("form_data.txt");
      let query = parsedURL.query;
      writableStream.write(query.name + "\0");
      writableStream.write(query.email);
      writableStream.on("finish", () => {
        console.log("Form has been saved Successfully");
      });
      writableStream.end();
      res.end("Data has been succesfully saved");
    }
  })
  .listen(4000);
