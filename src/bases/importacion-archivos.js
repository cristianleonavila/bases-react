import heroes, { owners } from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id);
}

export const getHoroesByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner);
}

//console.log( getHeroeById(2) ); 
//console.log( getHoroesByOwner('DC') ); 

