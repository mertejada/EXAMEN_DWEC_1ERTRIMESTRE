/* Cree, haciendo uso de herencia y sobrecarga, las clases necesarias para modelar los
puestos de trabajo de un informático y de un conserje. Deberá contener, al menos,
información personal (nombre, apellidos, dirección, sueldo y tres tareas típicas que
realice), deberá estar todo protegido de agresiones externas y contar con getters y
setters. Escriba el código necesario para demostrar que funciona. */

class Trabajador {
    constructor(nombre, apellidos, direccion, sueldo, tareas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.sueldo = sueldo;
        this.tareas = tareas;
        
    }

    get Nombre(){
        return this.nombre;
    }

    get Apellido(){
        return this.apellidos;
    }

    get Direccion(){
        return this.direccion;
    }

    get Sueldo(){
        return this.sueldo;
    }

    set Nombre(nom){
        this.nombre = nombre;
    }

    
}

class Informatico extends Trabajador{
    constructor(nombre, apellidos, direccion) {
        super(nombre, apellidos, direccion, 1500, ["Desarrollar", "Diseñar", "Solucionar"]);//he supuesto que el informatico promedio gana 1500 euros
    }
}

class Conserje extends Trabajador{
    constructor(nombre, apellidos, direccion) {
        super(nombre, apellidos, direccion, 1200, ["Cerrar ventanas", "Atender", "Administrar papeleo"]);//he supuesto que el conserje promedio gana 1500 euros
    }
}

let trabajador = new Trabajador ("Alejandro", "Rodríguez", "Calle Huescar", 2000, ["Atención al cliente", "Gestión RRSS", "Organización creativa"]);
let informatico = new Informatico ("Maria", "Ramirez", "Calle Carpa");
let conserje = new Conserje ("Matías", "Martínez", "Calle Europa");

console.log(trabajador);
console.log(informatico);
console.log(conserje);


//Funcionamiento del setter
console.log(trabajador.Nombre);
//Funcionamiento del getter: No entiendo por que no funciona
console.log(trabajador.Nombre("Mercedes"));


