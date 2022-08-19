const http=require('http');

/* Creating a server. */
const server=http.createServer((request, response)=>{
    const status=200; //200=OK
    const mimeType={'Content-type':'text/html'};
    response.writeHead(status, mimeType);
    response.write('<html> <body> Hola desde el html de nodejs </body> </html>');
    response.end();
});

server.listen(8000);
console.log('El servidor fue iniciado');