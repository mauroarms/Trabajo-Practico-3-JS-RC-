let aparicionesSumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for(let i = 0; i<50; i++){
    let dado1 = Math.floor(Math.random() * (7-1) + 1)
    let dado2 = Math.floor(Math.random() * (7-1) + 1)
    console.log(dado1 , dado2)
    let suma = dado1+dado2
    aparicionesSumas[suma-2]++
}

const tabla = `
<table>
    <tbody>
        <thead>
            <td>Suma</td>
            <td>Apariciones</td>
        </thead> 
        <tr>       
            <td>2</td>
            <td> ${aparicionesSumas[0]} </td>
        </tr>
        <tr>
            <td>3</td>
            <td> ${aparicionesSumas[1]} </td>
        </tr>
        <tr>       
            <td> 4 </td>
            <td> ${aparicionesSumas[2]} </td>
        </tr>
        <tr>
            <td>5</td>
            <td> ${aparicionesSumas[3]} </td>
        </tr>
        <tr>       
            <td>6</td>
            <td> ${aparicionesSumas[4]} </td>
        </tr>
        <tr>
            <td>7</td>
            <td> ${aparicionesSumas[5]} </td>
        </tr>
        <tr>       
            <td>8</td>
            <td> ${aparicionesSumas[6]} </td>
        </tr>
        <tr>
            <td>9</td>
            <td> ${aparicionesSumas[7]} </td>
        </tr>
        <tr>       
            <td>10</td>
            <td> ${aparicionesSumas[8]} </td>
        </tr>
        <tr>
            <td>11</td>
            <td> ${aparicionesSumas[9]} </td>
        </tr>
        <tr>
            <td>12</td>
            <td> ${aparicionesSumas[10]} </td>
        </tr>
    </tbody>
</table>
`     
document.write(tabla)
console.log(tabla)
