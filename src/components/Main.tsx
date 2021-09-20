import React from "react";
import styled from "styled-components";

import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { Content } from "./layout/Content";
import { useFetchData } from "../hooks/useFetchData";
import { media } from "../utils/responsive";
import { EBreakpoints, ESide } from "../enums/style";

const AppContainer = styled(({ overflow, children, ...rest }) => <div {...rest}>{children}</div>)`
  height: 100vh;
  overflow: ${(props) => (props.overflow ? "hidden" : "auto")};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header" "sidebar" "content";

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "header header" "sidebar content";
  }
`;

export const Main = () => {
  const { overflow } = useFetchData();
  return (
    <AppContainer overflow={overflow}>
      <Header />
      <Sidebar />
      <Content />
    </AppContainer>
  );
};
