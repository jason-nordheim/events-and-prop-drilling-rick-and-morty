import React from 'react'
import Card from './Card'

export default function CardContainer({characters, addFavorite, removeFavorite}) {
    const characterCards = characters.map(c => {
        return <Card key={c.id} character={c} addFavorite={addFavorite} /> 
    })

    return (
        <div className="card-container">
            {characterCards}
        </div>
    )
}
