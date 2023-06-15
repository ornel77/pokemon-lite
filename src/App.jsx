import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./Classes/Pokemon";
import Login from "./components/Login";
import Path from "./components/Path";
import GameOver from "./components/GameOver";
import Pokedex from "./components/Pokedex";
import PokemonGuesser from "./components/PokemonGuesser";
import "./App.scss";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  // const [pokemonsStarter, setPokemonsStarter] = useState([]);
  const [pokemonWon, setPokemonWon] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const tabPokemon = [];
      const starter = [];
      const idStarter = [1, 4, 7];

      for (let i = 1; i <= 151; i += 1) {
        tabPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
      const responses = await Promise.all(tabPokemon.map((url) => fetch(url)));
      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      const pokemons = data.map((pokemon) => new Pokemon(pokemon));

      pokemons.forEach((pokemon) => {
        if (idStarter.includes(pokemon.id)) {
          starter.push(pokemon);
        }
      });

      setPokemonsArray(pokemons);
      // setPokemonsStarter(starter);
    };
    fetchData();
  }, []);

  const handleEncounters = (index) => {
    console.info(index);
    setPokemonsArray((prevState) =>
      prevState.map((pokemon, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...pokemon,
            encounter: true,
          };
        }

        return pokemon;
      })
    );
  };

  return (
    <Routes className="App">
      <Route path="/" element={<Login />} />
      <Route path="/Path" element={<Path />} />
      <Route
        path="/Path/PokemonGuesser"
        element={
          <PokemonGuesser
            pokemonsArray={pokemonsArray}
            setPokemonWon={setPokemonWon}
            setScore={setScore}
            handleEncounters={handleEncounters}
          />
        }
      />
      <Route
        path="/Path/GameOver"
        element={
          <GameOver
            pokemonWon={pokemonWon}
            score={score}
            setPokemonWon={setPokemonWon}
            setScore={setScore}
          />
        }
      />
      <Route
        path="/Path/Pokedex"
        element={<Pokedex pokemonsArray={pokemonsArray} />}
      />
    </Routes>
  );
}

export default App;
