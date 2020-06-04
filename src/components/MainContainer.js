import React, { useState } from 'react'
import CardContainer from './CardContainer'

export default function MainContainer({characters}) {
    return (
        <div>
            <CardContainer characters={characters} /> 
        </div>
    )
}
