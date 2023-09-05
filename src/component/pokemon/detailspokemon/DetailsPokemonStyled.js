import { styled } from "styled-components";

const DivBig = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
      to bottom,
      rgba(53, 53, 53, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://www.xtrafondos.com/wallpapers/pokebola-y-pokemones-2857.jpg");
  background-size: cover;
  background-position: center center;
  overflow: auto;


 
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-weight: bold;
  
  /* Otros estilos personalizados aquí */
`;

const DivPrim = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50%;

  & img {
    margin: 20px 20px;
    width: 30%;
    height: 90%;
  }
`;

const DivInf = styled.div`
  width: 70%;
  margin: 0 40px;
  padding: 15px;
  color: rgb(245, 245, 245);
  background-color: rgba(53, 53, 53, 0.7);
  border-radius: 10px;
`;
const MovInf = styled.section`
  display: flex;
  margin:0 40px;
  /* width: 90%; */
  height:38%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(53, 53, 53, 0.7);
  color: rgb(245, 245, 245);
  border-radius:10px;

  & ul{
    margin-top: 15px;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 10px;
  }
`;

export { DivBig, DivPrim, DivInf, MovInf };
