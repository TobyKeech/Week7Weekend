import React from "react";
const PokeDetails = ({pokeData}) => {
    return (  
        <>
        <div>
       <b>Name of pokemon: {pokeData.name}</b>
        </div>

        <div>
        They are this tall: {pokeData.height} cm
        </div>

        <div>
       <b>Base Experience begins at : {pokeData.base_experience}</b>
        </div>
        <div>
       They have the following moves: {pokeData["moves"] ["move"]}
        </div>
        </>

    );
}
 
export default PokeDetails;