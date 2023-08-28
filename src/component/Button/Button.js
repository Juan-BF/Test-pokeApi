import React, { useState } from "react";

const Button = ({ seeMore, showLess, nameBtnMore, nameBtnLess }) => {
  
  
  return (
    <div>
      <button type="button" onClick={seeMore} >
        {nameBtnMore}
      </button>
      <br />
      <button type="button" onClick={showLess}>
      {nameBtnLess}
      </button>
    </div>
  );
};

export default Button;