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

    getNombre(){
        return this.nombre;
    }

    getApellidos(){
        return this.apellidos;
    }

    getDireccion(){
        return this.direccion;
    }

    getSueldo(){
        return this.sueldo;
    }

    getTareas(){
        return this.tareas;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    setTareas(tareas){
        this.tareas = tareas;
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


console.log("Trabajador: \n",trabajador);
console.log("Informático: \n",informatico);
console.log("Conserje: \n",conserje);
console.log("\n ");


//Funcionamiento del setter en la clase padre e hijas
console.log("Nombre trabajador: ",trabajador.getNombre());
console.log("Tareas informático: ",informatico.getTareas());
console.log("Apellidos conserje: ",conserje.getNombre());
console.log("\n ");

//Funcionamiento del getter: No entiendo por que no funciona
trabajador.setNombre("Javier");
informatico.setTareas(["Asistir a cursos","Diseñar BBDD","Solucionar bugs"]);
conserje.setApellidos("Amezcua Sánchez");

console.log("Nombre trabajador tras usar el setter: ",trabajador.nombre);
console.log("Tareas informático tras usar el setter: ",informatico.tareas);
console.log("Apellidos conserje tras usar el setter: ",conserje.apellidos);




