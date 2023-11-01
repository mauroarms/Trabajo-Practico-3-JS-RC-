let s2=0, s3=0, s4=0, s5=0, s6=0, s7=0, s8=0, s9=0, s10=0, s11=0, s12=0

for(let i = 0; i<50; i++){
    let dado1 = Math.floor(Math.random() * (7-1) + 1)
    let dado2 = Math.floor(Math.random() * (7-1) + 1)
    let suma = dado1+dado2
    switch(suma){
        case 2:
                s2++
            break;
        case 3:
            s3++
            break;
        case 4:
            s4++
            break;
        case 5:
            s5++
            break;
        case 6:
            s6++
            break;
        case 7:
            s7++
            break;
        case 8:
            s8++
            break;
        case 9:
            s9++
            break;
        case 10:
            s10++
            break;
        case 11:
            s11++
            break;
        case 12:
            s12++
            break;
    }
}

let aparicionesSumas = [s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
const tabla = `
<table>
    <tbody>
        <tr>
            <td>Suma</td>
            <td>Apariciones</td>
        </tr> 
        <tr>       
            <td>2</td>
            <td> ${aparicionesSumas[0]} </td>
        </tr>
        <tr>
            <td>3</td>
            <td> ${aparicionesSumas[1]} </td>
        </tr>
        <tr>       
            <td>4</td>
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

