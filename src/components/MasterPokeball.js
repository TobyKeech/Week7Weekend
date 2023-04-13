import React from "react";
import Pokemon from "./Pokemon";
const MasterPokeball = (favPokemons) => {

    const favPokemonItems = favPokemons.map((pokemon,index) => {
        <Pokemon pokemon={pokemon} key={index}/>
    });


    return ( 
        <>
            <ul>{favPokemonItems}</ul>
        </>
     );
}
 
export default MasterPokeball;