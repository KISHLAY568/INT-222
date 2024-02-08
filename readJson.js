const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        })
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));