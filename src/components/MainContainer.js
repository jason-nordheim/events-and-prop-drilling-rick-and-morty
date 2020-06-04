import React, { useState } from 'react'
import CardContainer from './CardContainer'

export default function MainContainer({characters, addFavorite}) {
    return (
        <div>
            <CardContainer characters={characters} addFavorite={addFavorite} /> 
        </div>
    )
}
