/*1.Escriba el código necesario para que se pinte por consola un triángulo de n filas, siendo
n un número pedido por teclado. (1 punto)*/

let filas = parseInt(prompt("Introduzca el número de filas: "));

let cad = ""
for(let i = 0 ; i<=filas ; i++){
    cad+="\n";
    for(let j = 1 ; j<=i ; j++){
        cad+="*";
    }
    
}

console.log(cad);