/*5.Cifre una cadena, pedida al usuario por teclado, mediante un algoritmo que sustituya
cada letra de la cadena original por la que ocupe una posición aleatoria (una vez
calculada, cada letra original siempre se sustituye por la misma). Devuelva la cadena
original, la cifrada y la cadena usada para cifrar (2 puntos)*/

//NO HE CONSEGUIDO QUE CADA LETRA TENGA SU VALOR DE CIFRADO CORRESPONDIENTE
function cifrarCadena(cadena){
    let cadenaCifrada = "";
    let letras = ["a","b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "v", "w", "y", "x", "z"
    ];

    let letrasCadena = cadena.split("");

    let valoresCifrado = [];

    for(let i = 0 ; i<cadena.length ; i++){ //añado los valores del indice de cada letra
        let numeroRandom;

        do{
            numeroRandom = Math.floor(Math.random()*letras.length);
        }while(valoresCifrado.includes(numeroRandom));

        valoresCifrado.push(numeroRandom);

        cadenaCifrada+= letras[valoresCifrado[i]];

    }

    return cadenaCifrada;
}

console.log(cifrarCadena("MERCEDES"));
