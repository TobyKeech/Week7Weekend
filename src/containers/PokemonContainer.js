import React, { useState, useEffect } from 'react';
import Pokeball from '../components/Pokeball';
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [favPokemons, setFavPokemons] = useState(null); 

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function () {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
            .then(res => res.json())
            .then(pokemons => setPokemons(pokemons["results"]))
            .then(pokemons => console.log(pokemons["results"]))
    }

    const onPokemonClicked = function (pokemon) {
        setClickedPokemon(pokemon)
    }
    const addToFaves = (pokemon) => {
        setFavPokemons([...favePokemons, pokemon])
        console.log(favPokemons);
    };


    return (
        <>
            <div>
                <h1>Pokedex</h1>
                <Pokeball pokemons={pokemons} onPokemonClicked={onPokemonClicked}/>
                {clickedPokemon ? <Pokeball pokemon={clickedPokemon} addToFaves={addToFaves}/> : null}
            </div>
        </>
    );
}

export default PokemonContainer;