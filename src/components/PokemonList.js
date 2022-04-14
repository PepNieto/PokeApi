import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { searchPokemon } from '../config/api';
import PokemonCard from './card/PokemonCard';
//import Pagination from './components/Pagination';
export default function PokemonList({pokedata, loading}) {

  return (
      <div className="container">
        {pokedata.map((item, i)  => (
        <div>
          <PokemonCard data={item.data}/>
        </div>
      ))}
     
    </div>
  )
}

