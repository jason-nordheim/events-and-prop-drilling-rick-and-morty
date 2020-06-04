import React, {useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';



export default function App() {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
  }, [])


  function getCharacters(){
    fetch('http://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(response => setCharacters(response.results))
  }
  
  return ( 
    <div className='App'>
      <h1>Rick and Morty Characters</h1>
      <MainContainer characters={characters} /> 
    </div>
  );
}
