/*
 * 2C = Two of Clubs
 * 2D = Two of Diagmonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//VARIABLES DEL JUEGO
let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS DEL HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");

const puntosHTML = document.querySelectorAll("small");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

//ESTA FUNCION CREA UN NUEVO DECK O BARAJA
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    //console.log(deck);
    return deck;
};

crearDeck();

//ESTA FUNCION PERMITE OTMAR UNA CART
const pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }

    //ELIMINO LA ULTIMA CARTA DE LA BARAJA
    const carta = deck.pop();
    //console.log(deck);
    //console.log(carta);

    return carta;
};

//pedirCarta();
/* for (let i = 0; i <= 100; i++) {    
    pedirCarta();    
} */

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valorCarta) ? (valor === "A" ? 11 : 10) : valor * 1;

    /* let puntos = 0;
      //EVALUAMOS SI ES UN NUMERO 
      if (isNaN(valor)) {
          puntos = ( valorCarta === 'A') ? 11 : 10;                
      }else{        
          puntos = valor *1;        
      }
      console.log(puntos); */

    //return carta;
};

//const valor = valorCarta("AD");
//console.log(valor);

// TURNO DE LA COMPUTADORA
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        /* <img class="carta" src="assets/cartas/2C.png"> */
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        //añado la imagen de la carta del jugador
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);


    setTimeout(() => {
        if (puntosComputadora == puntosMinimos) {
            alert('Nadie Gana ');

        } else if (puntosMinimos > 21) {
            alert('La computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 10);

};

/*================================================ 
   EVENTOS   
================================================*/
btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    /* <img class="carta" src="assets/cartas/2C.png"> */
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    //añado la imagen de la carta del jugador
    divCartasJugador.append(imgCarta);

    //control de puntos
    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn("21, Genial");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
});

//Evento detener el programa
btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

//Evento Nuevo Juego
btnNuevo.addEventListener('click', () => {

    //Limpio la consola
    console.clear();

    //limipio el deck
    deck = [];
    //Crear nuevo deck
    deck = crearDeck();

    puntosJugador  = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = ''; 

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
