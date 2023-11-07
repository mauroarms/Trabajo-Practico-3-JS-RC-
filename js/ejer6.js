/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

function rectangulo(altura, base){
    const p = 2*(altura+base)
    return p
}

const h = parseInt(prompt("Ingrese la altura del rectangulo: "))
const b = parseInt(prompt("Ingrese la base del rectangulo: "))
const perimetro = rectangulo(h,b)

document.write("<p>El perimetro del rectangulo es: "+ perimetro +"</p>")


