import React from "react";
import styled from "styled-components";
import { useContent } from "../../hooks/useContent";
import { SearchResults } from "./SearchResults";

export const ContentContainer = styled.main`
  grid-area: content;
  padding: 1em;
`;

export const Content = () => {
  const { showLoader } = useContent();
  return <ContentContainer>{showLoader ? "Loader" : <SearchResults />}</ContentContainer>;
};
