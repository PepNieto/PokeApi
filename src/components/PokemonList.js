import React, {useState} from 'react'


export default function PokemonList({pokemon}) {

  console.log('llegamso a pokemonlist')
  console.log(pokemon)
  let count = 0;
  return (
    <div>
       {console.log(pokemon)}
      {pokemon.map(item => (
      <div>nombre: {item.name} {item.url}</div>
        
      ))}
    </div>
  )
}

