import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Path() {
  return (
    <>
      <div className="path">
        <Link to="/Path/PokemonGuesser">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button className="btn-fight" type="submit" />
        </Link>
      </div>
      <Navbar />
    </>
  );
}

export default Path;
