import React, { useState, useEffect } from 'react';
import Pokeball from '../components/Pokeball';
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function () {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(pokemons => setPokemons(pokemons["results"]))
            .then(pokemons => console.log(pokemons["results"]))
    }

    return (
        <>
            <h2>Pokedex</h2>
            <div className='Pokelist'>
                <Pokeball pokemons={pokemons} />
            </div>

        </>
    );
}

export default PokemonContainer;