import React, { Component } from 'react';
const Pokemon = ({pokemon}) => {
    return ( 
        <>
            <div>{pokemon["abilities"]["ability"]["name"]}</div>
        </>
     );
}
 
export default Pokemon;