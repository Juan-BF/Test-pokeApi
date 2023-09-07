import { styled } from "styled-components";

const DivChange = styled.div`
  & label {
    position: fixed;
    top: 50px;
    right: 50px;
    transform: translateY(-50%);
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(1, 2, 3, 4);
    transition: 0.4s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input[type="checkbox"]:checked + span {
    background-color: #ccc;
  }

  input[type="checkbox"]:checked + span:before {
    transform: translateX(26px);
  }
`;
const DivInf = styled.div`
  display: flex;
  margin-top: 50px;
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  align-items: center;

  & h1 {
    font-family: "Rowdies", cursive;
    display: flex;
    margin: 10px 10px;
    justify-content: center;
  }
  & p {
    display: flex;
    justify-content: center;
    margin: 15px;
    width: 50%;
    padding: 5px 10px 25px;
    font-family: "Sora", sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: center;
  }
`;
const DivPokeInf = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 100px;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.linearGu},
      rgba(44, 44, 44, 0.3)
    ),
    url("https://images5.alphacoders.com/109/1092839.jpg");
  background-size: cover;
  background-position: center center;
`;
export { DivChange, DivInf, DivPokeInf };
