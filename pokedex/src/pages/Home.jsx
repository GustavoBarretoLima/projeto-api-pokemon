import { Grid } from '@mui/material'
import {Box, Container} from "@mui/system";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components'
import { Skeletons } from '../components/PokemonCard/skeleton';
import Navbar from '../Navbar'

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(()=>{
         getPokemons();
    }, []);

    const getPokemons = ()=> {
        var endpoints = []
        for( var i = 1; i<500;i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res)=>setPokemons(res));       

    };

    const pokemonFilter = (name) => {
        var filterpokemons = []
        if(name===""){
            getPokemons();
        }
        for (var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filterpokemons.push(pokemons[i]);
            }
        }
        setPokemons(filterpokemons);
    }; 
    

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxwidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Skeletons/> :
                     pokemons.map((pokemon, key) => (
                      <Grid item xs={12} sm={6} md={4} lg={2} key = {key} >
                      <PokemonCard name = {pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                      </Grid>
                     ))
             }

                      
                </Grid>          
                </Container>           
            </div>
    );
};
