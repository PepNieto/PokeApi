import React, {useEffect, useState} from 'react';
import PokemonList from './components/PokemonList';
import { PokemonListapi } from './config/api';
import axios from 'axios'
import Pagination from './components/Pagination';
import Header from './components/Header';
import { makeStyles } from '@mui/styles';

function App() {
  const [pokemon, setPokemon] = useState();
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const useStyle = makeStyles(() => ({
    App:{
      backgroundColor:'#14161A',
      color: "white",
      minHeight: "100vh",
    }
  }));

  useEffect(() => {
    const consultaAPI = async () => {
      setLoading(true);
      const consulta = await axios( currentPage );
      setNextPage(consulta.data.next);
      setPrevPage(consulta.data.previous);
      setPokemon(consulta.data.results);
      setLoading(false);
    };
    
    consultaAPI();
  }, [currentPage]);
  
  function gotoNextPage(){
    setCurrentPage(nextPage);
   
  }   

  function gotoPrevPage(){
    setCurrentPage(prevPage)
    
  }
  
    return(
    <div>
      {loading ? <h1>Loading</h1> :(
        <>
          <Header/>
          <PokemonList pokemon={pokemon}/>
          <Pagination
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          />
        </>
      )}  
    </div>
    

  );
}

export default App;
