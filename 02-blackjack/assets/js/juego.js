/* 
    * 2C = Two of Clubs
    * 2D = Two of Diagmonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
*/

let deck    = [];
const tipos = ['C','D','H','S'];
const especiales = ['A', 'J', 'Q', 'K'];

//ESTA FUNCION CREA UN NUEVO DECK O BARAJA
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo)
        }
        
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }


    console.log(deck); 
    deck = _.shuffle(deck);
    console.log(deck); 
    return deck;

}

crearDeck();

//ESTA FUNCION PERMITE OTMAR UNA CART
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    } 

    //ELIMINO LA ULTIMA CARTA DE LA BARAJA 
    const carta = deck.pop();
    console.log(deck);
    console.log(carta); 
    


    return carta;
}

//pedirCarta();
/* for (let i = 0; i <= 100; i++) {    
    pedirCarta();    
} */

const valorCarta = (carta)=> {

    const valor = carta.substring(0,carta.length-1); 
    return (isNaN(valorCarta)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
    
    /* let puntos = 0;
    //EVALUAMOS SI ES UN NUMERO 
    if (isNaN(valor)) {
        puntos = ( valorCarta === 'A') ? 11 : 10;                
    }else{        
        puntos = valor *1;        
    }
    console.log(puntos); */
    
    


    //return carta;
}

const valor = valorCarta('AD');
console.log(valor);

