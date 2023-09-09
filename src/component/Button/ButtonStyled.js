import styled from "styled-components";

const BoxBtn = styled.div`
  position: fixed;
  bottom: 0;
  flex-direction: row-reverse;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 750%;
  height: 80px;
  margin: 20px 0 0;
  gap: 15px;
  z-index: 9999;
`;
const ButtonS = styled.button`
  background-color: rgb(70, 68, 68);
  height: 60px;
  border-radius: 80px;
  font-family: "Sora", sans-serif;
  font-size: 1.4rem;
  width: 220px;
  border: none;
  color: #ffffff;

  &:hover {
    background-color: rgb(121, 116, 116);
  }
  &:active {
    background-color: rgb(37, 37, 37);
  }
`;

export { BoxBtn,ButtonS };
