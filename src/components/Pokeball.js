import React, { Component } from 'react';
import Pokemon from './Pokemon';
const Pokeball = ({pokemons}) => {

    const pokemonItem = pokemons.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
        <>
        <ul>
            {pokemonItem}
        </ul>
        </>
      );
}
 
export default Pokeball;