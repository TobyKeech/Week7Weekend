import React from "react";
import Pokemon from "./Pokemon";
const MasterPokeball = (favPokemons, onPokemonClicked) => {

    const favPokemonItems = favPokemons.map((pokemon,index) => {
        <Pokemon pokemon={pokemon} key={index} onPokemonClicked={onPokemonClicked}/>
    });


    return ( 
        <>
            <ul>{favPokemonItems}</ul>
        </>
     );
}
 
export default MasterPokeball;