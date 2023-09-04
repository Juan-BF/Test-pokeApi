import "./App.css";

import AppRoutes from "./component/pokemon/pages/router";

import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  *{
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
} 
::-webkit-scrollbar {
  width: 0;
}

input {
    all: unset;
}
}

`;

export default App;
