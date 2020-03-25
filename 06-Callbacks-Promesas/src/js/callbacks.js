const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica a las picaduras de las  arañas'
    }
}

export const buscarHeroe = (id,callback)=>{

    const heroe = heroes[id];
    
    if (heroe) {
        callback(null,heroe);        
    } else {
        // un error
        callback(`No existe un héro con el id ${id}`);
        
    }
    
    // callback(heroe)


}