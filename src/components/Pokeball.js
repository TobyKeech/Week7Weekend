import React, { Component, useState } from 'react';
import Pokemon from './Pokemon';
import PokeDetails from './PokeDetails';
const Pokeball = ({ pokemons }) => {
    const [pokeData, setPokeData] = useState(null);
    const pokemonItem = pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} setPokeData={setPokeData} />
    })

    return (
        <>
            <div className='PokeList'>
                {pokemonItem}
                {pokeData ? <PokeDetails pokeData={pokeData} /> : null}
            </div>
        </>
    );
}

export default Pokeball;