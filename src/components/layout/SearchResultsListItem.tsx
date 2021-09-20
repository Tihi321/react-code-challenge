import React from "react";
import styled from "styled-components";
import { searchTextColor } from "../../themes";

const ListItems = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  border: 1px solid ${searchTextColor};
  padding: 10px;
  cursor: pointer;
`;

const ListPicture = styled.img`
  border: 1px solid ${searchTextColor};
  padding: 10px;
`;

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${searchTextColor};
  padding: 10px;
  flex: 1;
`;

const ListCalories = styled.div`
  color: ${searchTextColor};
  font-size: 14px;
  margin: 5px 0;
`;

const ListLabels = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
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
      <ListInfo>
        <div>Label: {label}</div>
        <ListCalories>Calories: {calories}</ListCalories>
        <ListLabels>Health Labels: {healthLabels.join(", ")}</ListLabels>
        <ListLabels>Diet Labels: {dietLabels.join(", ")}</ListLabels>
      </ListInfo>
      <ListPicture src={picture} />
    </ListItems>
  );
};
