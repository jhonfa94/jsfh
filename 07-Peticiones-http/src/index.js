/* import "./styles.css";
import { obtenerChiste } from "./js/http-provider";


obtenerChiste().then(console.log); */

// import { init } from "./js/chistes-page";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";

//  init();

// obtenerUsuarios().then(console.log);

/* import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Jhon Fabio',
    job: 'Programador'
}).then(console.log);

CRUD.actualizarUsuario(2,{
    name: 'Jhon Fabio',
    job: 'Programador'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log); */


import {init} from './js/archivos-page'

init();