const fher = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
};

const pedro = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
};

// fher.imprimir();

function Persona(nombre, edad) {
    console.log("Se ejecuto esta linea");

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 30);
console.log(maria);
console.log(melissa);
maria.imprimir();
melissa.imprimir();

