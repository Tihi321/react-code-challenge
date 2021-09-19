import React from "react";
import styled from "styled-components";
import { asideBackgroundColor } from "../../themes";
import { Diet } from "../categories/Diet";
import { Search } from "../categories/Search";
import { Rows } from "../common/Rows";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background-color: ${asideBackgroundColor};
  padding: 1em;
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Rows>
        <Search />
        <Diet />
      </Rows>
      <p>Bookmarked recipes</p>
    </SidebarContainer>
  );
};
