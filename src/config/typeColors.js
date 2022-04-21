import axios from "axios";

export const PokemonListapi = (limit, offset) => 
    `https://pokeapi.co/api/v2/pokemon?$offset={limit}&limit=${offset}=0`;



export function ChangeColor(type){

    let color;
    switch(type) {
        case 'bug':
            return  '#88950C';
        case 'dark':
            return '#3E2D23'
        case 'dragon':
            return '#725CD8';
        case 'electric':
            return '#F9BF27'
        case 'fairy':
            return '#F5B2F6'
        case 'fighting':
            return '#80341B'
        case 'fire':
            return '#EE4210'
        case 'flying':
            return '#90A4EF'
        case 'ghost':
            return '#6061B4'
        case 'grass':
            return '#73C337'
        case 'ground':
            return '#D7BB6E'
        case 'ice':
            return '#6DD3F3'
        case 'normal':
             return '#C5C1B8'   
        case 'poison':
             return '#914494'
        case 'psychic':
             return '#EE4881'
        case 'rock':
            return '#9F873E'
        case 'steel':
            return '#171717'
        case 'water':
            return '#1270CD'
    
             default:
            return '#8F438D'
      }
    
    
    }