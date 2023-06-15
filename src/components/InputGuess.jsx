import { useState } from "react";
import PropTypes from "prop-types";

function InputGuess({ setTurn, setIsGuessed, pokemonToGuess }) {
  const [answer, setAnswer] = useState("");
  function handleChange(e) {
    e.preventDefault();
    const answerGiven = e.target.value;
    setAnswer(answerGiven.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    const pokemonName = pokemonToGuess.name;
    if (answer === pokemonName.toLowerCase()) {
      setIsGuessed(true);
      setAnswer("");
    } else {
      setIsGuessed(() => {
        return false;
      });
      setAnswer("");
      setTurn((prev) => prev + 1);
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        className="answer-input"
        placeholder="Enter your guess"
        value={answer}
        onChange={handleChange}
      />
    </form>
  );
}

InputGuess.propTypes = {
  setTurn: PropTypes.func.isRequired,
  setIsGuessed: PropTypes.func.isRequired,
  pokemonToGuess: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default InputGuess;
