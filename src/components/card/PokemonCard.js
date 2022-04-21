import { Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useCallback } from 'react'
import './pokemonCard.css' 
import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import { ChangeColor } from '../../config/typeColors';

const theme = createTheme({
  palette: {
    green: green,
  },
});


function PokemonCard(pokemon) {
    
  const lastCard = useCallback(node => {
    console.log(node)
  })

    return (

    <div>
        <div className="pokemonCard">
            <div className="leftCard">  
                <div className="pokemonSprite"><img height="100" src={pokemon.data.sprites.front_default}/></div> 
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