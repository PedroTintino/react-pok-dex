import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import PokemonCard from '../components/PokemonCard/Index'
import { Container, Grid, Skeleton } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons/Index'

function Home(){
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
    var endPoints = []
    
    for(var i = 1; i < 500; i++ ){
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    // console.log(endPoints)
    var response = axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
    .then((res) => setPokemons(res))
    .catch((e) => console.log(e))
    return response;
}
const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if( name == 0){
        getData();
    }
    for( var  i in pokemons){
        if (pokemons[i].data.name.includes(name)){
            filteredPokemons.push(pokemons[i]);
        }
    }
    setPokemons(filteredPokemons);
}
    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
            <Grid container gap={'1em'} alignItems={'center'} justifyContent={'center'}>
                    {pokemons.lenght === 0 ? ( <Skeletons /> ) : 
                    (pokemons.map((pokemon, key) => (
                        <Grid item xs={12} sm={5} md={4} lg={2} key={key}>
                          <PokemonCard 
                          name={pokemon.data.name} 
                          image={pokemon.data.sprites.front_default}
                          types={pokemon.data.types}
                          />
                        </Grid>)
                    ))}   
            </Grid>
            </Container>
        </div>
    )
}
export default Home