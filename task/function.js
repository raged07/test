 var nombre = "Edgar"
function fun(){
    if(true){
        var nombre = "eric"
    }
    console.log(`Hola ${nombre}`)}
fun()

function saludar(){
    let i=0                         //cuando el valor va a cambiar, igual a var     const, valor constante
    for(i; i<10; i++){ //let, const
        console.log(`Hola ${nombre}`)
    }
    console.log(`El valor de i es ${i}`) //interpolar variables y cadenas $
}