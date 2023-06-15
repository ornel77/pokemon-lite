import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import colors from "./colors";
import iconType from "./iconType";

function TagType({ type }) {
  const [typeImage, setTypeImage] = useState("");

  const loadImage = () => {
    import(iconType[type]).then((image) => {
      setTypeImage(image.default);
    });
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <ul>
      <li className="liPokedexType" style={{ backgroundColor: colors[type] }}>
        <div>{type}</div>
        <img className="liPokedexTypeImage" src={typeImage} alt="icon" />
      </li>
    </ul>
  );
}

TagType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TagType;
