import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DivG = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Sora", sans-serif;
  padding: 20px;
  font-size: 1rem;
  width: 89%;
  height: 72px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(94, 94, 94, 0.3)
  );
  border: 1px solid rgb(27, 27, 27);
  border-radius: 6px;
  color: #ffffff;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    h3 {
      display: none;
      justify-content: center;
    }
     {
      justify-content: center;
    }
  }
`;

const DivInp = styled.div`
display: flex;
  align-items: center;
  margin: 0 9px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: rgb(80, 80, 80);
  margin: 0 12px;
  
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 2px;
  background-color: rgb(37, 40, 42);
  width: 250px;
  height: 50px;

`

const InputStyled = styled.input`
  background-color: rgb(37, 40, 42);
  width: 190px;
  height: 30px;
  
  &:focus {
    caret-color: rgb(252, 252, 252);
    background-color: rgb(80, 80, 80);
  }
`;

export { DivG, StyledFontAwesomeIcon, InputStyled,DivInp,SearchBox };
