import React from "react";
import styled from "styled-components";
import { useSelectedRecipe } from "../../hooks/useSelectedRecipe";
import { searchBackgroundColor, searchTextColor } from "../../themes";
import { Button } from "../common/Button";
import map from "lodash/map";
import get from "lodash/get";

const RecipeModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${searchBackgroundColor};
`;

const RecipeModalItem = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${searchTextColor};
`;

const RecipePicture = styled.img`
  border: 1px solid ${searchTextColor};
  padding: 10px;
  flex: 1;
`;

const RecipeTitle = styled.h2`
  padding: 10px;
  text-align: center;
`;

const RecipeDescription = styled.div`
  display: flex;
  padding: 10px;
`;

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;
`;

const RecipeLabels = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  word-break: break-word;
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
        <RecipeTitle>{label}</RecipeTitle>
        <RecipeDescription>
          <RecipePicture src={picture} />
          <RecipeInfo>
            <RecipeLabels>
              Ingredients: {map(ingredients, (item) => get(item, "text"))}
            </RecipeLabels>
            <RecipeLabels>Digest: {map(digest, (item) => get(item, "label"))}</RecipeLabels>
            <RecipeLabels>
              Nutritions: {map(totalNutrients, (item) => get(item, "label"))}
            </RecipeLabels>
          </RecipeInfo>
        </RecipeDescription>
        <Button onClick={onClick}>Close modal</Button>
        <Button onClick={switchBookmark}>{isBookmarked ? "UnBookmark" : "Bookmark"}</Button>
      </RecipeModalItem>
    </RecipeModalContainer>
  );
};
