//a.Crear una matriz de 50 números aleatorios entre el 1 y el que el usuario meta por teclado
//-------------------------------------------------------------------------------------------
let max = parseInt(prompt("Introduzca el número máximo aleatorio: "));

let matrizNumerosAleatorios = [];

for(let i = 0; i<50 ; i++){
    matrizNumerosAleatorios.push(Math.floor(Math.random()*(max)+1));
}
//comprobacion
console.log("\nMatriz de numeros aleatorios: \n",matrizNumerosAleatorios);

//b.Separar la matriz anterior en dos matrices, una de números pares y otras de impares
//-------------------------------------------------------------------------------------------

let matrizPares = matrizNumerosAleatorios.filter(numero=> numero%2 == 0);
let matrizImpares = matrizNumerosAleatorios.filter(numero=> numero%2 != 0);

//comprobacion
console.log("\nMatriz de numeros pares: \n",matrizPares);
console.log("\nMatriz de numeros impares: \n",matrizImpares);

//c.Sumarle un número aleatorio entre 1 y 10 (el mismo) a todos los elementos de cada matriz.
//-------------------------------------------------------------------------------------------

matrizNumerosAleatorios = matrizNumerosAleatorios.map(numero=> numero*Math.floor(Math.random()*10+1));

//comprobacion
console.log("\nMatriz de numeros aleatorios a los que se le suma un número aleatorio entre 1 y 10: \n",matrizNumerosAleatorios);


//d.Devolver, la siguiente información:
//i. La suma de todos los elementos de cada matriz 
//ii. El número mayor y menor de cada matriz.
//-------------------------------------------------------------------------------------------

let sumMatrizNumerosAleatorios = matrizNumerosAleatorios.reduce((suma,numero) => suma+numero,0);
let sumMatrizPares = matrizPares.reduce((suma,numero) => suma+numero,0);
let sumMatrizImpares = matrizImpares.reduce((suma,numero) => suma+numero,0);

console.log("Suma de la matriz de números aleatorios: ",sumMatrizNumerosAleatorios);
console.log("Suma de la matriz de números aleatorios pares: ",sumMatrizPares);
console.log("Suma de la matriz de números aleatorios impares: ", sumMatrizImpares);





