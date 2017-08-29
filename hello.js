var http = require ("http"); // http modulo que se encarga servir apps web

var manejador = function(solicitud, respuesta){
    console.log("Recibi nueva peticion");
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);

