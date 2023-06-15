import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CloseBtn from "./CloseBtn";
import InputGuess from "./InputGuess";
import Navbar from "./Navbar";

function PokemonGuesser({
  pokemonsArray,
  setPokemonWon,
  setScore,
  handleEncounters,
}) {
  const [turn, setTurn] = useState(0);
  const [index, setIndex] = useState(0);
  const [isGuessed, setIsGuessed] = useState();
  const [pokemonToGuess, setPokemonToGuess] = useState({});
  const [round, setRound] = useState(1);

  const navigate = useNavigate();

  const getRandomIndex = (maxIndex) => {
    return 1 + Math.floor(Math.random() * maxIndex);
  };

  const handleClickNext = () => {
    setRound((prev) => prev + 1);
    setPokemonWon((prev) => [...prev, pokemonsArray[index]]);
    setIsGuessed();
    setTurn(0);
    setScore((prev) => prev + 1);
    handleEncounters(index);
    // console.info(pokemonsArray[index]);
  };

  const handleClickSkip = () => {
    setRound((prev) => prev + 1);
    setIsGuessed();
    setTurn(0);
  };

  useEffect(() => {
    const indexPokemon = getRandomIndex(pokemonsArray.length);
    setPokemonToGuess(pokemonsArray[indexPokemon]);
    setIndex(indexPokemon);
    if (round > 10) {
      navigate("/Path/GameOver");
    }
  }, [round]);

  return (
    <div className="guesser-container">
      <CloseBtn setScore={setScore} setPokemonWon={setPokemonWon} />

      {pokemonToGuess && (
        <div className="guesser-inner-container">
          <div className="round">
            {" "}
            Round <span className="roundNumber">{round}</span> / 10
          </div>
          <h2>Who is that pokemon ?</h2>
          <p>(answer in english only)</p>
          {console.info(pokemonToGuess.name)}
          <InputGuess
            setTurn={setTurn}
            setIsGuessed={setIsGuessed}
            pokemonToGuess={pokemonToGuess}
          />
          <img
            draggable="false"
            src={pokemonToGuess.image}
            alt=""
            className={isGuessed ? "poke-shadow" : "poke-color"}
          />

          {isGuessed && (
            <div className="goodGuessContainer">
              <h3>Amazing!!</h3>
              <button
                type="button"
                className="btn cta-next"
                onClick={handleClickNext}
              >
                Next
              </button>
            </div>
          )}

          {isGuessed === false && (
            <div className="wrongGuessContainer">
              <h3>Try Again : Turn n°{turn} </h3>
              <button
                type="button"
                className="btn cta-skip"
                onClick={handleClickNext}
              >
                Skip
              </button>
            </div>
          )}

          {isGuessed === undefined && (
            <button
              type="button"
              className="btn cta-skip"
              onClick={handleClickSkip}
            >
              Skip
            </button>
          )}
        </div>
      )}
      <Navbar />
    </div>
  );
}

PokemonGuesser.propTypes = {
  pokemonsArray: PropTypes.shape([]).isRequired,
  setPokemonWon: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  handleEncounters: PropTypes.func.isRequired,
};

export default PokemonGuesser;
