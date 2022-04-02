import React, {useEffect, useState} from 'react';
import PokemonList from './components/PokemonList';
import { pokemonListapi } from './config/api';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState();
  const [limit, setLimit] = useState(100);
  const [offset, setOffset] = useState(0);
  
  
  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
       .then(function (response) {
        // handle success
        setPokemon(response.data.results);
        console.log('useeffect')
        console.log( response)
       })
       
    }, [])
    

    return(
    <div>
      {console.log('entramos en pokemonlist')}
      {console.log(pokemon)}
      <PokemonList pokemon={pokemon}/>
    </div>
    

  );
}

export default App;
