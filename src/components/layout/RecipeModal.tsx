import React from "react";
import styled from "styled-components";
import { useSelectedRecipe } from "../../hooks/useSelectedRecipe";
import { searchBackgroundColor, searchTextColor } from "../../themes";
import { Button } from "../common/Button";

const RecipeModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${searchBackgroundColor};
`;

const RecipeModalItem = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${searchTextColor};
`;

export const RecipeModal = ({
  picture,
  label,
  ingredients,
  totalNutrients,
  digest,
  uri,
  onClick,
}: {
  picture: string;
  label: string;
  ingredients: any;
  totalNutrients: any;
  digest: any;
  uri: string;
  onClick: () => void;
}) => {
  const { switchBookmark, isBookmarked } = useSelectedRecipe(uri);
  return (
    <RecipeModalContainer>
      <RecipeModalItem>
        <div>{label}</div>
        <div>{picture}</div>
        <Button onClick={onClick}>Close modal</Button>
        <Button onClick={switchBookmark}>{isBookmarked ? "UnBookmark" : "Bookmark"}</Button>
      </RecipeModalItem>
    </RecipeModalContainer>
  );
};
