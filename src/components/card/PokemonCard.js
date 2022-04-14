import { Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import './pokemonCard.css' 
import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';

const theme = createTheme({
  palette: {
    green: green,
  },
});



function ChangeColor(type){
console.log('changecolor')
console.log(type)
let color;
switch(type) {
    case 'bug':
        return  '#88950C';
    case 'dark':
        return '#3E2D23'
    case 'dragon':
        return '#725CD8';
    case 'electric':
        return '#F9BF27'
    case 'fairy':
        return '#F5B2F6'
    case 'fighting':
        return '#80341B'
    case 'fire':
        return '#EE4210'
    case 'flying':
        return '#90A4EF'
    case 'ghost':
        return '#6061B4'
    case 'grass':
        return '#73C337'
    case 'ground':
        return '#D7BB6E'
    case 'ice':
        return '#6DD3F3'
    case 'normal':
         return '#C5C1B8'   
    case 'poison':
         return '#914494'
    case 'psychic':
         return '#EE4881'
    case 'rock':
        return '#9F873E'
    case 'steel':
        return '#171717'
    case 'water':
        return '#1270CD'

         default:
        return '#8F438D'
  }


}

function PokemonCard(pokemon) {
    
    console.log('entramos en pokomcard')
    console.log(pokemon)

    return (

    <div>
        <div className="pokemonCard">
            <div className="leftCard">  
                <div className="pokemonSprite"><img src={pokemon.data.sprites.front_default}/></div> 
            </div>
        <div className="rightCard">
            <div className='card-top'>
                <h3>{pokemon.data.name}</h3>#{pokemon.data.order}
            </div>
          
            <div className='card-bottom'>
             
               {pokemon.data.types.map((type, i) => {
                
                return <div key={i}>  <Chip label={type.type.name} style={{backgroundColor: ChangeColor(type.type.name)}}/></div>
            })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default PokemonCard