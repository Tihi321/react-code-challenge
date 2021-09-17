import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header" "sidebar content";
`;

const Header = styled.header`
  grid-area: header;
  padding: 1em;
  background-color: #666;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const Sidebar = styled.nav`
  grid-area: sidebar;
  background-color: #ccc;
  padding: 1em;
`;

const Content = styled.main`
  grid-area: content;
  padding: 1em;
`;

function App() {
  return (
    <AppContainer>
      <Header>The Recipe Collection</Header>

      <Sidebar>
        <p>Search recipes</p>
        <p>Bookmarked recipes</p>
      </Sidebar>

      <Content>[content]</Content>
    </AppContainer>
  );
}

export default App;
