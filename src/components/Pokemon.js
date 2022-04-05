import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Pokemon(url) {
    console.log("entramos a pokemon");
    const [pokemon, setPokemon] = useState({});
    
 
        const getPokemon = async (url) => {
            axios.get(url)
            .then((response) => {
                console.log(response)
                setPokemon(response);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    

    useEffect(() => {
        getPokemon(pokemon.url)
    })

  return (
    <div></div>
  )
}

export default Pokemon
