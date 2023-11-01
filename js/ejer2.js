let ciudades = []

do{
    let ciudad = prompt("Ingrese una ciudad: ")
    ciudades.push(ciudad)

}while(confirm("Ingrese una ciudad o seleccione cancelar para finalizar"));

document.write("<p>El arreglo de ciudades tiene ", ciudades.length, " elementos</p>")

document.write("<ul>")
document.write(`    <li>Elemento 1er posicion: ${ciudades[0]} </li>`)
document.write(`    <li>Elemento 3er posicion: ${ciudades[2]} </li>`)
document.write(`    <li>Elemento ultima posicion: ${ciudades[ciudades.length-1]} </li>`)
document.write("</ul>")


ciudades.push("París")
document.write(`    <li>Elemento 2da posicion: ${ciudades[1]} </li>`)

ciudades[1] = 'Barcelona'

document.write("<h1>Arreglo de ciudades</h1>")
document.write("<ul>")
for(let i=0; i<ciudades.length; i++){
    document.write(`    <li>Elemento: ${ciudades[i]} </li>`)
}
document.write("</ul>")