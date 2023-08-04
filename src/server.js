const http = require("http");

const PORT = 3000;
const routes = {
    "/": "Hello World!",
    "/books": "List of Books",
    "/authors": "Our Authors"
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(routes[req.url])
});

server.listen(PORT, () => console.log(`Server Listening PORT: http://localhost:${PORT}`));