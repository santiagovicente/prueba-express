const http = require('http');

//Nos crea un serveridor web. 
http.createServer((req, res) => {
    //Lo que muestra en la web
    res.write('Hola Mundo');
    //Decimos que termine la escritura.
    res.end();
}).listen(8080);


console.log('Eschuchando el puerto');