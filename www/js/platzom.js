//si la palabra termina en "ar", se le quitan los dos ultimos caracteres

function platzom(str){
    let translation = str;
    if (str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2);//corta la cadera, elimina los 2 ultimos caracteres
    }

    /*Si la palabra inicia con "z"se le anade los caracteres "pe" al final de la palabra*/ 
    if (str.toLowerCase().startsWith('z')){
        translation +='pe'
    }
    
/*Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion*/
    if(str.length>=10){
        separador = ""
        limite    = str.length/2
        arregloDeSubCadenas = str.split(separador, limite); //A,B,C,D,E...
        arregloAcadena = arregloDeSubCadenas.join("");
        subCadena = str.substring(str.length, str.length/2);//Final de cadena
        translation = `${arregloAcadena}${'-'}${subCadena}`;
    }

   /* letlength = translation.length
    if(length >= 10){
        const fHalf = trnaslation.slice(0, Math.round(length/2));
        const sHalf = translation.slice(Math.round(length/2));
        translation = `${fHalf} - ${sHalf}`;
    }*/

    
/*Si la palabra original es un palindromo ninguna de las anteriores reglas funciona, y se devuelve la palabra
intercalando entre mayusculas y minusculas*/

    const reverse = (str)=>+ //es lo mismo que const reverse = function(str)
    str.split('').reverse().join('');
    function minMay(str){
        const l = str.length;
        let translation = "";
        let capitalize = true;
        for (let i=0; i<l;i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();//? comparacion ?
        }
        return translation 
            
        }
    }
    if(str = reverse(str)){
        return minMay(str);//
    }
  
    return translation
}
console.log(platzom("programar"));
console.log(platzom("Zorro"));
console.log(platzom("ABCDEFGHIJKMNOPQRSTUVWXY"));


/*var cadena = "ABCDEFGHIJ";
separador = ""
limite    = cadena.length/2
arregloDeSubCadenas = cadena.split(separador, limite); //A,B,C,D,E...
arregloAcadena = arregloDeSubCadenas.join("");

subCadena = cadena.substring(cadena.length, cadena.length/2);//Final de cadena

console.log(arregloAcadena + '-' + subCadena);*/
