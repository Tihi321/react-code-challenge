import React from "react";
import styled from "styled-components";
import { useSearch } from "../hooks/useSearch";

import { searchBackgroundColor, searchBorderColor, searchTextColor } from "../themes";

const SearchInput = styled.input`
  border: 1px solid ${searchBorderColor};
  background-color: ${searchBackgroundColor};
  color: ${searchTextColor};
  padding: 5px;
`;

export const Search = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const onTermChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value);

  return <SearchInput placeholder="Search recipes" value={searchTerm} onChange={onTermChange} />;
};
