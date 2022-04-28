import { Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useCallback } from 'react'
import './pokemonCard.css' 
import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import { ChangeColor } from '../../config/typeColors';
import { useNavigate } from "react-router-dom";



const theme = createTheme({
  palette: {
    green: green,
  },
});


function PokemonCard(pokemon) {
  const navigate = useNavigate();
  console.log('image');
  console.log(pokemon['data']['sprites']);
  
  

 


  const lastCard = useCallback(node => {
    console.log(node)
  })
  console.log('poke');
  console.log(pokemon);
    return (
      
    <div>
        <div className="pokemonCard" onClick={() => navigate(pokemon.data.name, pokemon)}>
            <div className="leftCard">  
            {pokemon.data.sprites.other.home.front_default ? <div className="pokemonSprite"><img height="100" src={pokemon.data.sprites.other.home.front_default}/></div> 
            :
            pokemon.data.sprites.front_default ? <div className="pokemonSprite"><img height="100" src={pokemon.data.sprites.front_default}/></div>
            :
            pokemon['data']['sprites']['other']['official-artwork']['front_default'] ? <div className="pokemonSprite"><img height="100" src={pokemon['data']['sprites']['other']['official-artwork']['front_default']}/></div>
            : 
           <h3>404 img not found</h3>
          
            }     
            </div>
          <div className="rightCard">
              <div className='card-top'>
                  <h3>{pokemon.data.name}</h3>#{pokemon.data.id}
              </div>
            
              <div className='card-bottom'>
              
                {pokemon.data.types.map((type, i) => {
                
                    return <div className="pokemonTypes" key={i}>  <Chip label={type.type.name} style={{backgroundColor: ChangeColor(type.type.name)}}/></div>
                        
              })}
              </div>
          </div>
        </div>
    </div>
  )
}

export default PokemonCard