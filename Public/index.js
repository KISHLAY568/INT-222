const http = require('http');
const fs = require('fs');

const querystring = require('querystring');
http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('Public/index.html', 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                res.end("There is some error");
            }
            else {
                res.end(data);
            }
        })



    }
    else if (req.url === "/save-json") {
        let body = "";

        req.on('data', (chunk) => {
            
            body = body + chunk;
        });
        req.on('end', () => {
            const jsonData = querystring.parse(body).jsonData;
            const jsonString = JSON.stringify(jsonData);
            fs.writeFile('Public/new.json', jsonString, (err) => {
                if (err) {
                    console.error(err);
                    res.end("check console");
                } else {
                    res.end("Operation was successfull");
                }
            })
        })
    }



}).listen(4000);



