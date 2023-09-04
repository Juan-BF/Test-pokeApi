import { styled } from "styled-components";

const UlPokemonCards = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: auto;
  width: 1400px;
  height: 800px;
  list-style: none;
  padding: 35px 100px;
  z-index: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 175px;
  margin: 5px 4px 0;
  background-color: ${({ theme }) => theme.backgroundCard};

  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 1px 1px 4px #000;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  & p,
  & h3 {
    border-radius: 5px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    transform: translateY(-400%);
    transition: transform 0.3s ease-in-out;
    width: 100%;
    opacity: 0;
  }
  & p {
    transform: translateY(77px);
  }
  & h3 {
    font-weight: 100;
    color: ${({ theme }) => theme.text};
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.shado},
      transparent
    );
  }
  &:hover h3 {
    opacity: 1;
    transform: translateY(-75px);
  }
  &:not(:hover) h3 {
    transform: translateY(-100px);
    opacity: 0.5;
    transition: transform 0.3s ease-in-out;
  }

  &:hover p {
    opacity: 1;
    display: block;
  }
  &:hover {
    z-index: 9999;
    transform: scale(1.4);
    filter: brightness(1.2) contrast(1.2) saturate(1.8);
  }
  & p {
    color: ${({ theme }) => theme.text};
    text-decoration: underline; /* Añade subrayado */
    text-decoration-color: rgb(125, 134, 134);
  }
`;

;
export { UlPokemonCards, DivCards };
