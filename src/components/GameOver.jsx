import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GameOver({ pokemonWon, score, setPokemonWon, setScore }) {
  const handleClick = () => {
    setPokemonWon([]);
    setScore(0);
  };
  return (
    <div className="game-over">
      <div className="game-over-container">
        <p>You guessed {score} pokemon out of 10 </p>
        <div className="list-pokemon-img">
          {pokemonWon.map((pokemon) => (
            <img key={pokemon.name} src={pokemon.image} alt="" />
          ))}
        </div>
        <Link to="/Path">
          <button type="button" className="btn" onClick={handleClick}>
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
GameOver.propTypes = {
  pokemonWon: PropTypes.shape([]).isRequired,
  score: PropTypes.number.isRequired,
  setPokemonWon: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default GameOver;
