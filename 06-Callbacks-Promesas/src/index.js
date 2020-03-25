import "./styles.css";
import {obtenerHeroesArr} from './js/await';


// import { buscarHeroe, buscarHeroeAsync} from './js/promesas';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([ promesaLenta, promesaMedia, promesaRapida])
// .then(console.log)
// .catch(console.warn)

/* buscarHeroe('capi')
    .then(heroe => console.log(heroe))
    .catch(console.warn)

buscarHeroeAsync('iron')
    .then(heroe => console.log(heroe))
    .catch(console.warn) */


obtenerHeroesArr().then(console.table)


