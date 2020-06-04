import React from 'react'
import Card from './Card'

export default function CardContainer({characters}) {
    const characterCards = characters.map(c => <Card key={c.id} character={c} /> )

    return (
        <div className="card-container">
            {characterCards}
        </div>
    )
}
