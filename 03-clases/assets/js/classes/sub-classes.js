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


class Heroe extends Persona{

    clan = 'sin clan';

    /* ===================== 
      Cuando ejecutamos el constructor en esta clase por estar hereando 
      una clase nos mostrara un error donde  nos hace referencia de que ya se tienen un contructor que es del que se esta heredando.
      Para solucionar este error se debe utilizar la palabra reservada super(), la cual es la que permite hacer referencia la clase que se esta heredando.
      super() va hacer referencia a la clase que se esta extendiendo
    ========================= */ 

    constructor(nombre,codigo, frase){
        ///Primero se llama el super
        super(nombre,codigo, frase); 
        this.clan = 'Los Avengers';
    }

    quiensoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        /* ===================== 
          Por medio del super() podemos hacer referencia a los metodos
          que tenemos de la clase que se hereda 
        ========================= */ 
        super.quiensoy();        
    }


    
}


//

const spiderman = new Heroe("Peter Parker", "Spiderman","Soy tu amigable vecino spiderman"
);

//const spiderman = new Heroe();
console.log(spiderman);
spiderman.quiensoy();


