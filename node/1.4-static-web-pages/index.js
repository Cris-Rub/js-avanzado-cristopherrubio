const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((request, response)=>{
    const urlObject=url.parse(request.url);
    const path=urlObject.path;
    let fileSystemPath='';

    if(path==='/'){
        fileSystemPath='static/index.html';
    }else{
        fileSystemPath=`static${path}`;
    }

    fs.stat(fileSystemPath, (error)=>{
        if(!error){
            fs.readFile(fileSystemPath, (error, file)=>{
                if(!error){
                    const status=200;
                    const mimeType={'Content-type':'text/html'};
                    response.writeHead(status, mimeType);
                    response.write(file);
                    response.end();
                }else{
                    //500 Internal server error
                    const status=500;
                    const mimeType={'Content-type':'text/html'};
                    response.writeHead(status, mimeType);
                    response.write('Error en el servidor'); //No es necesario detallar el error
                    response.end();
                }
            });
        }else{
            //404 Not Found
            const status=404;
            const mimeType={'Content-type':'text/html'};
            response.writeHead(status, mimeType);
            response.write('<html> <body> Not found </body> </html>');
            response.end();
        }
    });
});

server.listen(8000);
console.log('Servidor de paginas...');