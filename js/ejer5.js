function composicionCadena(cadena){

    let mayus=0
    let minus=0

    for(let i=0; i<cadena.length; i++){

        let ascii = cadena.charCodeAt(i);

        if (ascii> 64 && ascii < 91) {
            mayus++     
            console.log(cadena[i])
        }else if (ascii> 96 && ascii < 122) {
            minus++  
            console.log(cadena[i])
        }

    }

    if(mayus>0){
        if(minus>0){
            document.write("<p>El texto es una mezcla de mayusculas y minusculas</p>")            
        }else{
            document.write("<p>El texto está compuesto solo por mayusculas</p>")             
        }
    }else if(minus>0){
        document.write("<p>El texto está compuesto solo por minusculas</p>")       
    }else{
        document.write("<p>El texto no contiene letras</p>")  
    }

}

let cadena = prompt("Ingrese su cadena (el analizador no contará numeros ni signos de puntuación): ")
composicionCadena(cadena)