import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { searchPokemon } from '../config/api';

export default function PokemonList({pokedata, loading}) {
  console.log('entramos en el pokemonlist')
  console.log(pokedata)

  
    


 

  return (
      <div className="container">
      
       {pokedata.map((item, i)  => (
      <div>
        <div key={i}>{item.data.name}</div>
        <div><img src={item.data.sprites.front_default}/></div>
        <div>{item.data.order}</div>
      </div>
      ))}
     
    </div>
  )
}

