import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Main } from "./components/Main";
import { coreStyles, headingStyles, textStyles } from "./styles/core";
import { ThemeContainer } from "./themes";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
  ${headingStyles}
  ${textStyles}
`;

function App() {
  return (
    <ThemeContainer>
      <Normalize />
      <CoreStyle />
      <Main />
    </ThemeContainer>
  );
}

export default App;
