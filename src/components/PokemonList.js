import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { searchPokemon } from '../config/api';
import PokemonCard from './card/PokemonCard';
import InfiniteScroll from 'react-infinite-scroll-component';
//import Pagination from './components/Pagination';
export default function PokemonList({pokedata,pokemon, loading, setCurrentPage}) {
console.log('pokedata')
  return (  
  <InfiniteScroll
    dataLength={pokedata.length}
    hasMore={true}
    loader={<h4>loading</h4>}
    next={() => setCurrentPage(() => pokemon.next)}>
    <div className="container">
      {pokedata.map((item, i)  => (
      <div>
        <PokemonCard data={item.data}/>
      </div>
    ))}   
    </div>
  </InfiniteScroll>
    
  )
}
