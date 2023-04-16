import React from "react";
const PokeDetails = ({pokeData}) => {
    return (  
        <>
        <div>
       <b>Name of pokemon: {pokeData.name}</b>
        </div>

        <div>
        They are this tall {pokeData.height} cm
        </div>

        <div>
       Base Experience begins at : {pokeData.base_experience}
        </div>
        <div>
       They have the following moves: {pokeData["moves"] ["move"]}
        </div>
        </>

    );
}
 
export default PokeDetails;