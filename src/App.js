import React, {useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import FavoriteContainer from './components/FavoriteContainer'



export default function App() {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetchCharacters()
  }, [])

  function addFavorite(character){
    if(favorites.find(existing => existing == character) == null) {
      setFavorites([...favorites, character]) 
    }
  }

  function removeFavorite(character) {
    const newFavorites = [...favorites].filter(fav => fav !== character)
    setFavorites(newFavorites)
  }

  function fetchCharacters(){
    fetch('http://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(response => setCharacters(response.results))
  }
  
  return ( 
    <div className='App'>
      <h1>Rick and Morty Characters</h1>
      <FavoriteContainer favorites={favorites} removeFavorite={removeFavorite}/>
      <MainContainer characters={characters} addFavorite={addFavorite}/> 
    </div>
  );
}
