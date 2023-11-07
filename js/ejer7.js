function producto(a){
    const tabla = `
    <table>
        <tbody>
            <thead>
                <td>Multiplicador</td>
                <td>Resultado</td>
            </thead> 
            <tr>       
            <tr>       
                <td>1</td>
                <td> ${a*1} </td>
            </tr>
            <tr>       
                <td>2</td>
                <td> ${a*2} </td>
            </tr>
            <tr>
                <td>3</td>
                <td> ${a*3} </td>
            </tr>
            <tr>       
                <td>4</td>
                <td> ${a*4} </td>
            </tr>
            <tr>
                <td>5</td>
                <td> ${a*5} </td>
            </tr>
            <tr>       
                <td>6</td>
                <td> ${a*6} </td>
            </tr>
            <tr>
                <td>7</td>
                <td> ${a*7} </td>
            </tr>
            <tr>       
                <td>8</td>
                <td> ${a*8} </td>
            </tr>
            <tr>       
                <td>9</td>
                <td> ${a*9} </td>
            </tr>
            <tr>       
                <td>10</td>
                <td> ${a*10} </td>
            </tr>
        </tbody>
    </table>
    `     
    return tabla
}

const num = parseInt(prompt("Ingrese el numero a multiplicar: "))
document.write(producto(num))
console.log(producto(num))
