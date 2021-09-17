import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { withStateProvider } from "ts-use";
import { Main } from "./components/Main";
import { initialState, useContextStateProvider } from "./hooks/useContextStateProvider";
import { coreStyles, headingStyles, textStyles } from "./styles/core";
import { ThemeContainer } from "./themes";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
  ${headingStyles}
  ${textStyles}
`;

const App = () => {
  useContextStateProvider();

  return (
    <ThemeContainer>
      <Normalize />
      <CoreStyle />
      <Main />
    </ThemeContainer>
  );
};

export default withStateProvider(initialState)(App);
