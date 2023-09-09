import React from "react";
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { DivG, StyledFontAwesomeIcon,InputStyled,DivInp,SearchBox }from "./InputFilterStyled"

const Filters = ({ name, handleInputChange }) => {
  return (
    <DivG>
      <h3>FILTRAR POKEMON</h3>
      <SearchBox>
        <DivInp>
        <StyledFontAwesomeIcon icon={faSearchengin}/>
          <InputStyled
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
        </DivInp>
      </SearchBox>
    </DivG>
  );
};

export default Filters;
