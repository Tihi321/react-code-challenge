import React from "react";
import styled from "styled-components";

import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { Content } from "./layout/Content";

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header" "sidebar content";
`;

export const Main = () => {
  return (
    <AppContainer>
      <Header>The Recipe Collection</Header>

      <Sidebar />

      <Content>[content]</Content>
    </AppContainer>
  );
};
