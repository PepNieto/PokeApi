import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import Pokefoto from './resources/Poke_logo.svg.png'

const useStyles = makeStyles((theme) => ({
    body:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    main: {      
      flexDirection: "center",
      display: "column",
      alignItems: "center",
      marginTop: 25,
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  
  }));

function Header() {
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
        <div style={{display:'column'}}>

            <div style={{display:'flex', justifyContent:'center' }} >
                <img src={Pokefoto} style={{width:"40%"}}></img>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:20}}>
                <div style={{display:'flex', width:"50%"}}>
                    <TextField fullWidth label="Search" id="fullWidth" />
                    <Button  variant="contained">Search</Button>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Header