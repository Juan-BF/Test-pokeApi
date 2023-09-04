import React, { useState } from "react";
import "../Button/style.css";

const Button = ({ seeMore, showLess, nameBtnMore, nameBtnLess }) => {
  return (
    <div className="btn">
      <button className="btnList" type="button" onClick={seeMore}>
        {nameBtnMore}
      </button>
      <br />
      <button className="btnList" id="btnless" type="button" onClick={showLess}>
        {nameBtnLess}
      </button>
    </div>
  );
};

export default Button;
