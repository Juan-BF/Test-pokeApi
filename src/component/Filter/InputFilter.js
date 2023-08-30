import React from "react";
import "../Filter/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

const Filters = ({ name, type, handleInputChange }) => {
  return (
    <div className="navigationBar">
      <div className="searchBox">
        <div className="boxSearch">
        <FontAwesomeIcon icon={faSearchengin} className="icono-personalizado" />
          {/* <label htmlFor="name">Nombre del Pokemon</label> */}
          <input
          className="inputSearch"
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        {/* <div>
          <label htmlFor="type">Tipo de Pokemon </label>
          <input
            type="text"
            id="type"
            name="type"
            onChange={handleInputChange}
            value={type}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Filters;
