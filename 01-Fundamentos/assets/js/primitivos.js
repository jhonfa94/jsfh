/* ===================== 
  DATOS TIPO STRING 
========================= */ 
let nombre = "Peter Parker";
console.log(nombre);

nombre = "Ben Parker";
console.log(nombre);

nombre = 'Tía May';
nombre = `Tía May`; //back tricks

console.log(typeof(nombre));


nombre = 1234;
console.log(typeof(nombre));


/* ===================== 
  DATOS TIPO BOLEANO 
========================= */ 
let esMarvel = false; //true
console.log(typeof(esMarvel));

/* ===================== 
  DATOS TIPO NUMERO 
========================= */ 
let edad = 33; 
console.log(typeof(edad));

edad = 33.001;
console.log(typeof(edad));

let superPoder; 
console.log(typeof(superPoder)); // RESULTADO undefine, NO TIENE VALOR LA VARIABLE

let soyNull = null; 
console.log(typeof(soyNull));

/* ===================== 
  SYMBOL 
  Los symbol nos ayudan a identificar el tipo de dato en javascript
========================= */ 
let symbol1 = Symbol('a');
let symbol2 = Symbol('b');
console.log(typeof(symbol1));




