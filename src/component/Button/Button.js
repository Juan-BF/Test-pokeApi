import { BoxBtn,ButtonS } from "./ButtonStyled"


const Button = ({ seeMore, showLess, nameBtnMore, nameBtnLess }) => {
  return (
    <BoxBtn>
      <ButtonS type="button" onClick={seeMore}>
        {nameBtnMore}
      </ButtonS>
      <br />
      <ButtonS id="btnless" type="button" onClick={showLess}>
        {nameBtnLess}
      </ButtonS>
    </BoxBtn>
  );
};

export default Button;
