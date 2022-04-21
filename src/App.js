import React, {useEffect, useRef, useState} from 'react';
import PokemonList from './components/PokemonList';
import { getPokemonData, PokemonListapi } from './config/api';
import axios from 'axios'
import Pagination from './components/Pagination';
import Header from './components/Header';
import { makeStyles } from '@mui/styles';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [nextPage, setNextPage] = useState();
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  const [loadingMore, setLoadingMore] = useState(true);

  const useStyle = makeStyles(() => ({
    App:{
      backgroundColor:'#14161A',
      color: "white",
      minHeight: "100vh",
    }
  }));
//observador
let observador = new IntersectionObserver((entradas, observador) => {
  console.log(entradas)
}, {
  rootMargin: '0px 0px 0px 0px',
  threshold: 1.0
});

  useEffect(() => {
    setLoadingMore(true);
    const consultaAPI = async () => {
        console.log('consultaAPI')
        const consulta = await PokemonListapi(currentPage);
        const newPokemon = [];
        console.log(consulta.data.next)
        const promises = consulta.data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemon(consulta.data)
        setPokemons((oldPokemon) => [ ...oldPokemon, ...results])
        setLoadingMore(false)
      };
      consultaAPI();
      

    }, [currentPage]);
    

  

    return(
    <div>
     
        <>
          <Header/>
          <PokemonList pokedata={pokemons} pokemon={pokemon} setCurrentPage={setCurrentPage}/>
          <div className='Loading'>Loading</div>
        </>
      
    </div>
    

  );
}

export default App;
