/*3.Escriba el código necesario para almacenar la siguiente información sobre un usuario:
nombre, edad, calle, número, provincia, profesión y sueldo. Cree los siguientes
métodos con formato de flecha: mudarse, cambiarTrabajo e inicialice el objeto. Copie
dicho objeto en otro de forma que, al cambiarle los datos a este segundo, el primero
no se vea afectado.*/

let usuario = {
    nombre : "Mercedes",
    edad : 21,
    direccion : {
        calle : "Maria Goyri",
        numero : 1,
        provincia : "Granada"
    },
    empleo : {
        profesion : "Desarrollador",
        sueldo : 1400
    },
    mudarse : (calle, numero, provincia) => {
        usuario.direccion.calle = calle; 
        usuario.direccion.numero = numero;
        usuario.direccion.provincia = provincia;
    },
    cambiarTrabajo : (profesion, sueldo) => {
        usuario.empleo.profesion = profesion;
        usuario.empleo.sueldo = sueldo;
    }
}

//USUARIO SIN CAMBIOS
console.log(usuario);

//REALIZO CAMBIOS A USUARIO
usuario.mudarse("Coleta",3,"Córdoba");
usuario.cambiarTrabajo("Diseño web",1300);

//COMPRUEBO QUE SE HAN REALIZADO CORRECTAMENTE
console.log(usuario.direccion);
console.log(usuario.empleo);
//console.log(usuario);