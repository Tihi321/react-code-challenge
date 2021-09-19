import React from "react";
import { useSearch } from "../../hooks/useSearch";

import { SearchInput } from "../common/SearchInput";

export const Search = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <SearchInput
      placeholder="Search recipes"
      value={searchTerm}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(event.currentTarget.value)
      }
    />
  );
};
