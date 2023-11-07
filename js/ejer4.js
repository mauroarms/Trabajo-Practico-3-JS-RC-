function paridad(numero){
    parseInt(numero)
    if(numero%2 === 0){
        document.write("<p>El numero ingresado es par</p>")
    }else{
        document.write("<p>El numero ingresado es impar</p>")
    }
}

paridad(parseInt(prompt("Ingrese su numero: ")))