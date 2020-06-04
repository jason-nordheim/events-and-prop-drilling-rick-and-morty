import React from 'react'

export default function Card({character}) {
    const {id, name, image, status, species, gender } = character
    return (
        <div className='card'>
            <h3>{name}</h3>
            <img src={image} alt={name} /> 
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}
