import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";
import CloseBtn from "./CloseBtn";
import Navbar from "./Navbar";
import livre from "../assets/icon/livre.png";
import loupe from "../assets/icon/loupe.png";

function Pokedex({ pokemonsArray }) {
  const [searchString, setSearchString] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [filterType, setFilterType] = useState("name");

  const sortFonctionString = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const sortFonctionString2 = (a, b) => {
    if (a.type[0].type.name < b.type[0].type.name) {
      return -1;
    }
    if (a.type[0].type.name > b.type[0].type.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    if (filterType === "name") {
      setFilteredPokemonList(
        pokemonsArray
          .sort(sortFonctionString)
          .filter((pokemon) => pokemon[filterType].includes(searchString))
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }
    if (filterType === "id") {
      setFilteredPokemonList(
        pokemonsArray
          .sort((a, b) => a.id - b.id)
          .filter((pokemon) =>
            pokemon[filterType].toString().includes(searchString)
          )
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }

    if (filterType === "type") {
      setFilteredPokemonList(
        pokemonsArray
          .sort(sortFonctionString2)
          .filter((pokemon) => pokemon.type[0].type.name.includes(searchString))
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }

  }, [filterType, searchString]);

  const handelClickFilter = (e) => {
    setSearchString(e.target.value);
  };

  const handleClick = (property) => {
    setFilterType(property);
  };

  return (
    <div id="pokedex">
      <div className="searchPokedex">
        <CloseBtn />
        <input
          className="searchBarPok"
          type="text"
          onChange={handelClickFilter}
          placeholder="Pokemon"
        />
        <img className="searchIcon" src={loupe} alt="loupe" />
        <ul className="filtrePokedex">
          <span
            className="filtrePokedexColor"
            role="button"
            tabIndex={0}
            onClick={() => handleClick("id")}
            onKeyDown={null}
          >
            NUMBER
          </span>
          <span
            className="filtrePokedexColor"
            role="button"
            tabIndex={0}
            onClick={() => handleClick("name")}
            onKeyDown={null}
          >
            LETTER
          </span>
          <span
            className="filtrePokedexColor"
            role="button"
            tabIndex={0}
            onClick={() => handleClick("type")}
            onKeyUp={null}
          >
            TYPE
          </span>
        </ul>
      </div>

      <div>
        <img className="livre" src={livre} alt="livre" />
      </div>
      <div>{filteredPokemonList?.map((element) => element)}</div>
      <Navbar />
    </div>
  );
}

Pokedex.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Pokedex;
