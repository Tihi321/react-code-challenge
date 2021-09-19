import React from "react";
import styled from "styled-components";
import { useSidebar } from "../../hooks/useSidebar";
import { asideBackgroundColor } from "../../themes";
import { CuisineType } from "../categories/CuisineType";
import { Diet } from "../categories/Diet";
import { Health } from "../categories/Health";
import { MealType } from "../categories/MealType";
import { Search } from "../categories/Search";
import { Rows } from "../common/Rows";
import { Button } from "../common/Button";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background-color: ${asideBackgroundColor};
  padding: 1em;
`;

export const Sidebar = () => {
  const { submitSearch, searchDisabled, switchBookmarks, useBookmarks } = useSidebar();
  return (
    <SidebarContainer>
      <Rows>
        <Search />
        <Diet />
        <Health />
        <CuisineType />
        <MealType />
        <Button disabled={searchDisabled} onClick={submitSearch}>
          Submit Search
        </Button>
      </Rows>
      <Button onClick={switchBookmarks}>{useBookmarks ? "Hide" : "Show"} bookmarks</Button>
    </SidebarContainer>
  );
};
