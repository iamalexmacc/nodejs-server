//Modules
const http = require('http');
//to run file on web server
const filesystem = require('fs');

filesystem.readFiles('index.html', (err, html) => {
    if(err){
        throw err;
    }
    //variables
    const hostname = '127.0.0.1';
    const port = 5000;

    //initialization
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        response.write(html);
        response.end();
    });

    //run
    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port);
    });
});

