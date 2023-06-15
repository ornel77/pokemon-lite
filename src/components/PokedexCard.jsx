import PropTypes from "prop-types";
import colors from "./colors";
import TagType from "./TagType";
import fondpokeballWhite from "../assets/icon/fondpokeballWhite.png";

function PokedexCard({ pokemon }) {
  return (
    <div>
      {pokemon.encounter ? (
        <div id="pokedexCard">
          <div className="vertical-line">
            <span className="dot" />
          </div>
          <div className="cardPokedex">
            <img
              className="imgPokedex"
              style={{ backgroundColor: colors[pokemon.type[0].type.name] }}
              src={pokemon.image}
              alt="pokemon"
            />
          </div>
          <ul className="ulPokedex">
            <li className="liPokedex">
              #{pokemon.id?.toString().padStart(3, "0")}
            </li>
            <div id="name_type">
              <li className="liPokedexName">{pokemon.name}</li>
              <TagType type={pokemon.type[0].type.name} />
            </div>
          </ul>
        </div>
      ) : (
        <div id="pokedexCard2">
          <div className="vertical-line">
            <span className="dot" />
          </div>
          <div className="cardPokedex">
            <img
              className="imgPokedexGrey"
              // style={backgroundColor:}
              src={fondpokeballWhite}
              alt="pokemonball"
            />
          </div>
          <ul className="ulPokedex">
            <li className="liPokedex">
              #{pokemon.id?.toString().padStart(3, "0")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

PokedexCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokedexCard;
