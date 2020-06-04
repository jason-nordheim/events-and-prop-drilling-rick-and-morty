import React from 'react'

export default function Card({character, addFavorite, removeFavorite}) {
    const {id, name, image, status, species, gender } = character


    function handleClick(event){
        if(addFavorite) addFavorite(character)
        else removeFavorite(character)
    }

    return (
        <div className='card' onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} /> 
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}
