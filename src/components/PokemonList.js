import React, {useState} from 'react'


export default function PokemonList({pokemon}) {

    console.log('llegamso a pokemonlist')
    console.log(pokemon)

  return (
    <div>{pokemon.map(item =>(
        <div>{pokemon.name}</div>
    ))}
    </div>
  )
}

