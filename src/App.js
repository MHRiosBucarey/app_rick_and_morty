import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from "axios";

function App() {
     const[characters, setCharacters]=useState([]);
     const onClose=(id) => {
      const filtered= characters.filter((char)=>char.id!=id)
      setCharacters(filtered);
     }
     function onSearch(characterID){
         axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(({data})=>{
            if(data.name){
               setCharacters([...characters,data])
            }else{
               window.alert(`No se encontro un personaje con el ID: ${characterID}`)
            }
         });
      }

      return (
         <div className='App'>
            <Nav onSearch= {onSearch} />
            <Cards characters={characters} 
            onClose={onClose} />
            
         </div>
      );
};

export default App;
