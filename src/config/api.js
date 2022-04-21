import axios from "axios";


export const PokemonListapi = (currentPage) => {
    return axios(currentPage);
}

export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon${pokemon}`        
        const response = await fetch(url)
        return await response.json
    }catch(error){
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
    
        const response = await axios.get(url)
        return response
    }
    catch(err){
        console.log('Error en el backOffice')
    }
}