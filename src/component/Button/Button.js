import React, { useState } from "react";

const Button = ({ updateQuantity }) => {
  const seeMore = () => {
    updateQuantity(10);
  };

  const showLess = () => {
    updateQuantity(-10);
  };

  return (
    <div>
      <button type="button" onClick={seeMore}>
        agregar 10
      </button>
      <br />
      <button type="button" onClick={showLess}>
        quitar 10
      </button>
    </div>
  );
};

export default Button;