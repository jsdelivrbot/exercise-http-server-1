const http = require('http');
const server = http.createServer(); 
const { createReadStream } = require('fs');


server.on('request', (req, res) => {
    const indexStream = createReadStream('index.html');
    console.log('RESPONSE: ', res );
    indexStream.pipe(res);
});

server.listen(8080, () => {
    console.log("Listening on port 8080");
});