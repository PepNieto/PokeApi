import React, {useState} from 'react'
import Pokemon from './Pokemon';


export default function PokemonList({pokemon}) {

  console.log('llegamso a pokemonlist')
  console.log(pokemon)
  let count = 0;
  return (
    <div className="container">
  
      {pokemon.map((item, i)  => (
      <div key={i}>nombre: {item.name}
      
        <Pokemon url={item.url}/>
      </div>
      ))}
    </div>
  )
}

