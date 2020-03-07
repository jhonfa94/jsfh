//Creación de una clase
// Por defecto las clases de javascript manejan el use strict

class Persona {
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje(){
      console.log(this.nombre);
      console.log('Hola a todos, soy un método estático');
      
      
  }

  // Declaracion de atributos, propiedades de metodos y estaticos
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  // Para hacer referencia a los atributos dentro del constructor se debe hacer por medio del this
  /* Cada vez que se crea una clase se ejecuta en primera instancia un constructor  */
  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    if (!nombre) throw Error("Necesitamos el nombre");

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    
    Persona._conteo++;
  }

  //  Establesco un valor a la comida
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  //Obtendo el valor de la comida
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  //CREACION DE UN METODO
  quiensoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quiensoy(); //LLAMO  UN METODO DENTRO DE OTRO
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

//
const spiderman = new Persona("Peter Parker", "Spiderman","Soy tu amigable vecino spiderman"
);
const iroman = new Persona("Tony Start", "Iroman", "Yo soy Iroman");
console.log(iroman);
spiderman.quiensoy(); //EJECUCION DEL METODO
// iroman.miFrase();//EJECUCION DEL METODO

spiderman.setComidaFavorita = "El pie de cereza de la tía May";
console.log(spiderman.getComidaFavorita);

console.log(spiderman);

console.log("Conteo estático ", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje()

