var http = require ("http"); 

var manejador = function(solicitud, respuesta){
    console.log("Recibi nueva peticion");
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);//coloca al servidor, listo para recibir peticiones

