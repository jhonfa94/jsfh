/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
/* ===================== 
  FUNCIONES ANONIMAS AUTO INVOCADAS 
  (() => {

  })();

========================= */
// UTILIZANDO EL PATRON MODULO
const miModulo = (() => {
  //LE DIGO A JAVASCRIPT QUE EVALUE MI CODIGO DE FORMA ESTRICTA
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  // Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => (elem.innerText = 0));
    divCartasJugadores.forEach(elem => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Esta función crea un nuevo deck
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    // console.log( deck );
    return _.shuffle(deck);
  };

  // Esta función me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  const valorCarta = carta => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  //Turno: 0 primer jugador y el último sera la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };

  // turno de la computadora
  const turnoComputadora = puntosMinimos => {
    do {
      let puntosComputadora = 0;

      const carta = pedirCarta();
      acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 100);
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntoJuagador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugadores[0] > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    } else if (puntosJugadores[0] === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();
    inicializarJuego();
  });

    return {
        nuevoJuego : inicializarJuego
    }

})();
//FINALIZO EL PATRON MODULO


