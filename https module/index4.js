const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = "Hello, this is your Node.js server!";
        //Synchronously write the message to a file
        try{
            fs.writeFileSync('output.txt',message,'utf8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File Content: '+message);
        }catch(err){
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal Server error');
        }
        
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));