
/* ===================== 
  PRIMERA FORMA DE CREAR UNA FUNCION 
========================= */ 
function saludar(){
    console.log('Hola Mundo');
       
}
// LLAMAR LA FUCNION
//saludar();


/* ===================== 
  SEGUNDA FORMA DE CREAR UNA FUNCION 
========================= */ 
var saludar2 = function () { 
    console.log('Hola Mundo');       
}

//LLAMO LA FUNCION SALUDAR 2
//saludar2();

/* ===================== 
  FUNCIONES CON ARGUMENTO 
========================= */ 
function saludar3 (nombre){
    console.log('Hola '+nombre);    
}

//LLAMO LA FUNCION CON EL PARAMETRO
//saludar3('Jhon Fabio');
var saludar4 = function(nombre){
    console.log(arguments);
    
    console.log('Hola ' + nombre);
    
}

//LLAMO LA FUNCION 4
//saludar4('Jhon Fabio');
//saludar4('Jhon Fabio',40,true,'Costa Rica');
//
/* ===================== 
  LA PALABRA RESERVADA arguments NOS MUESTRA TODOS LOS ARGUMENTOS QUE VIENEN EN LA FUNCION 
========================= */ 



/* ===================== 
  FUNCIONES CON FLECHA 
========================= */ 
const saludarFlecha = () =>{
    console.log('Hola Flecha');    
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola '+nombre);    
}

/* ===================== 
    ES RECOMENDABLE MANEJAR LOS PARAMETROS EN PARENTESIS AUNQUE SE PUEDE HACER COMO SE EVIDENCIA 
    EN LA SIGUIENTE FUNCION 
========================= */ 
const saludarFlecha3 = nombre =>{
    console.log('Hola '+nombre);    
}

//saludarFlecha();
//saludarFlecha2('Jhon ');
//saludarFlecha3('Fabio');

/* ===================== 
  FUNCIONES CON RETORNO 
========================= */ 
function retornar(nombre){
  return [1,2];
}

//console.log(retornar('nombre'));

function sumar(a,b){
  return a + b; 
}

//console.log(sumar(1,2));

const sumar2 = (a,b) => {
  return a + b;
}
//console.log(sumar2(1,2));

const sumar3 = (a,b) => a+b;
//console.log(sumar3(3,5));


function getAleatorio(){
  return Math.random();
}
//console.log(getAleatorio());

const getAleatorio2 = ()=>Math.random();
console.log(getAleatorio2());

