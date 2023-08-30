import React from "react";
import "../Filter/style.css"

const Filters = ({ name, type, handleInputChange }) => {
  return (
    <div>
      <div className="searchBox">
        <div>
          <label htmlFor="name">Nombre del Pokemon </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="type">Tipo de Pokemon </label>
          <input
            type="text"
            id="type"
            name="type"
            onChange={handleInputChange}
            value={type}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
