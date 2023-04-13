import React, { useState, useEffect } from 'react';
import Pokeball from '../components/Pokeball';
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = function () {
        fetch('https://pokeapi.co/api/v2/pokemon/4/')
            .then(res => res.json())
            .then(pokemons => setPokemons(pokemons))
            .then(pokemons => console.log(pokemons))
    }

    return (
        <>
            <div>
                <div>Pokeball</div>
                <Pokeball pokemons={pokemons} />
            </div>
        </>
    );
}

export default PokemonContainer;