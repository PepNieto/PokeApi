import React, {useEffect, useState} from 'react';
import PokemonList from './components/PokemonList';
import { PokemonListapi } from './config/api';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState();
  const [limit, setLimit] = useState(100);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios( PokemonListapi(limit, offset) );
      setPokemon(consulta.data.results);
      setLoading(false);
    };
    
    consultaAPI();
  }, []);
  


    return(
    <div>
      de
      {loading ? <h1>Loading</h1> :(
        <PokemonList pokemon={pokemon}/>
      )}  
    </div>
    

  );
}

export default App;
