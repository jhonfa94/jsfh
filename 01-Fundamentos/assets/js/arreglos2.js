let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log("Largo ",juegos.length);


let primero = juegos [2-2];
let ultimo = juegos[juegos.length -1];

console.log({primero,ultimo});

/* ===================== 
  RECORRER ARREGLOS 
========================= */ 
juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);    
});

/* ===================== 
  AÑADIR UN ELEMENTO NUEVO AL ARRAY EN LA ULTIMA POSICIÓN
========================= */ 
juegos.push('f-Zero');

console.log({juegos});

/* ===================== 
  AÑADIR ELEMENTOS AL ARRAY AL PRINCIPIO DEL ARRAY 
========================= */ 
juegos.unshift('Mortal Combat')

/* ===================== 
  ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY 
========================= */ 
juegos.pop();


/* ===================== 
  ELIMINAR ELEMENTO DEL ARREGLO EN ESPECIFICO 
  LLEVA COMO PARAMETRO EL VALOR DE INICIO DEL ARRAY Y LUEGO LA CANTIDAD, EN ESTE CASO INICIA EN LA 
  POSICION CERO Y BORRA DOS
========================= */ 
juegos.splice(0,2);

/* ===================== 
  BUSCAR LA POSICION DE UN VALOR EN UN ARRAY 
  RETORNA EL VALOR 1 CUANDO LO ENCUENTRA Y EL -1 CUANDO NO LO ENCONTRO
========================= */ 
juegos.indexOf('Metroid');





