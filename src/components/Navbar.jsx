import { useState } from "react";
import { Link } from "react-router-dom";
import bag from "../assets/icon/sac-a-dos.png";
import pokeball from "../assets/icon/pokeball.png";
import map from "../assets/icon/carte.png";
import book from "../assets/icon/livre_black.png";

import pokeballBg from "../assets/icon/fondpokeball.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line consistent-return
  const logique = () => {
    if (window.innerWidth < 1024) {
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      return (
        <nav style={open ? { bottom: "0%" } : { bottom: "-4rem" }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="arrowWrapper"
            onClick={() => setOpen(!open)}
            style={{ justifyContent: "center" }}
          >
            <div
              className="arrowUp"
              style={
                open ? { transform: "scaleY(-1)" } : { transform: "scaleY(1)" }
              }
            />
          </div>
          <div className="figureWrapper">
            <figure>
              <Link to="/Path">
                <img src={bag} alt="backapck" />
                <figcaption>Bag</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path">
                <img src={pokeball} alt="pokeball" />
                <figcaption>Team</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path">
                <img src={map} alt="map" />
                <figcaption>Map</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path/Pokedex">
                <img src={book} alt="book" />
                <figcaption>Pokedex</figcaption>
              </Link>
            </figure>
          </div>
          <img src={pokeballBg} alt="pokeball" className="backgroundPokeball" />
        </nav>
      );
    }
    if (window.innerWidth >= 1024) {
      return (
        <nav style={open ? { left: "0%" } : { left: "-11.5rem" }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="arrowWrapper"
            onClick={() => setOpen(!open)}
            style={{ justifyContent: "flex-start" }}
          >
            <div
              className="arrowLeft"
              style={
                open ? { transform: "scaleX(1)" } : { transform: "scaleX(-1)" }
              }
            />
          </div>
          <div className="figureWrapper">
            <figure>
              <Link to="/Path">
                <img src={bag} alt="backapck" />
                <figcaption>Bag</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path">
                <img src={pokeball} alt="pokeball" />
                <figcaption>Team</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path">
                <img src={map} alt="map" />
                <figcaption>Map</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/Path/Pokedex">
                <img src={book} alt="book" />
                <figcaption>Pokedex</figcaption>
              </Link>
            </figure>
          </div>
          <img src={pokeballBg} alt="pokeball" className="backgroundPokeball" />
        </nav>
      );
    }
  };
  return <div>{logique()}</div>;
}

export default Navbar;
