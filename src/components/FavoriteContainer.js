import React from 'react'
import Card from './Card'

export default function Favorite({favorites, removeFavorite}) {
    const characterCards = favorites.length > 0 
        ? favorites.map(c => <Card key={c.id} character={c} removeFavorite={removeFavorite} /> )
        : <p>No favorites</p>

    return (
        <div className="favorites-container">
            <h2>My Favorites</h2>
            <div className="fav-cards">
                {characterCards}
            </div>
        </div>
    )
}
