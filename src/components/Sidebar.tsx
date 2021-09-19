import React from "react";
import styled from "styled-components";
import { asideBackgroundColor } from "../themes";
import { Search } from "./Search";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background-color: ${asideBackgroundColor};
  padding: 1em;
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Search />
      <p>Bookmarked recipes</p>
    </SidebarContainer>
  );
};
