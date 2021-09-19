import React from "react";
import styled from "styled-components";
import { searchTextColor } from "../../themes";

const ListItems = styled.div`
  width: 100%;
  margin: 10px 0;
  border: 1px solid ${searchTextColor};
  padding: 10px;
  cursor: pointer;
`;

export const SearchResultsListItem = ({
  picture,
  label,
  calories,
  healthLabels,
  dietLabels,
  uri,
  onClick,
}: {
  picture: string;
  label: string;
  calories: number;
  healthLabels: string[];
  dietLabels: string[];
  uri: string;
  onClick: (uri: string) => void;
}) => {
  return (
    <ListItems onClick={() => onClick(uri)}>
      <div>{label}</div>
      <div>{picture}</div>
      <div>{calories}</div>
    </ListItems>
  );
};
