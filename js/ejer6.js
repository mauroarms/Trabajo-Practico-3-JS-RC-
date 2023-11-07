function rectangulo(altura, base){
    const p = 2*(altura+base)
    return p
}

const h = parseInt(prompt("Ingrese la altura del rectangulo: "))
const b = parseInt(prompt("Ingrese la base del rectangulo: "))
const perimetro = rectangulo(h,b)

document.write("<p>El perimetro del rectangulo es: "+ perimetro +"</p>")


