import React from "react";

const Filters = ({ name, type, handleInputChange}) => {
  
  return (
    <div>
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
  );
};

export default Filters;