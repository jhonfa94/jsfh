/* ===================== 
 La forma en la que se establece una propiedad privada
 seria por medio del simbolo #, el cual no esta establecidad al 100% en 
 compatiblidad en los navegadores.
 Esto nos ayuda a que no se pueda modificar la propiedad establecidad.
========================= */ 
class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {

      this.base = base;
      this.altura = altura;
      this.#area = base * altura; 
  }

}


const retangulo = new Rectangulo(10,15);
//retangulo.#area = 110;//Muestra error

console.log(retangulo);

