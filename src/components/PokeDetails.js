import React from "react";
const PokeDetails = ({pokeData}) => {
    return (  
        <>
        <div>
       Name of  {pokeData.name} is this tall {pokeData.height} {pokeData.base_experience}
        </div>

        <div>
        {pokeData.height}
        </div>

        <div>
        {pokeData.base_experience}
        </div>
        </>

    );
}
 
export default PokeDetails;