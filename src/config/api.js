export const PokemonListapi = (limit, offset) => 
    `https://pokeapi.co/api/v2/pokemon?$offset={limit}&limit=${offset}=0`;
