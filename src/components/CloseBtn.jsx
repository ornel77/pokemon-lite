import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import closeBtn from "../assets/icon/croix.png";

function CloseBtn({ setScore, setPokemonWon }) {
  const handleClick = () => {
    setScore(0);
    setPokemonWon([]);
  };
  return (
    <Link className="close-container close-blue close-red" to="/Path">
      <button type="button" className="btn-close" onClick={handleClick}>
        <img src={closeBtn} alt="" className="close-img" />
      </button>
    </Link>
  );
}

CloseBtn.propTypes = {
  setScore: PropTypes.func.isRequired,
  setPokemonWon: PropTypes.func.isRequired,
};

export default CloseBtn;
