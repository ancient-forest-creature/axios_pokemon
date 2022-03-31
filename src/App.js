import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https:/pokeapi.co/api/v2/pokemon/?limit=1126")
            .then(response => {
              setPokemon(response.data.results)})
            .catch((err) => {
              console.log(err);
            })
              //console.log(pokemon);
    }, []);

    return (
        <div style={{ width: "200px", margin: "auto" }}>
          <ul>
            {pokemon.map((poke, index) => {
                return (<li key={index}>{poke.name}</li>)
            })}
          </ul>
        </div>
    ); 
}

export default App;
