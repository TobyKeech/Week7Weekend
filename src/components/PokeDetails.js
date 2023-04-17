import React from "react";
const PokeDetails = ({ pokeData }) => {

    console.log(pokeData["moves"][0]["move"])

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
                They have the following moves: {pokeData["moves"][0]["move"]["name"]}
            </div>
        </>

    );
}

export default PokeDetails;