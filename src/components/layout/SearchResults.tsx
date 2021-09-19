import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import React, { useState } from "react";
import styled from "styled-components";
import { useSearchResults } from "../../hooks/useSearchResults";
import { TSelectedRecipe } from "../../types/recipes";
import { RecipeModal } from "./RecipeModal";
import { SearchResultsListItem } from "./SearchResultsListItem";

const SearchResultsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchResults = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({} as TSelectedRecipe);
  const { results, getRecipe } = useSearchResults();

  const onRecipeSelect = (uri: string) => {
    const recipe = getRecipe(uri);
    if (recipe !== undefined) {
      setSelectedRecipe(recipe);
      setOpenModal(true);
    }
  };
  return (
    <SearchResultsList>
      <div>Recipes</div>
      {map(results, (recipe) => (
        <SearchResultsListItem
          picture={recipe.picture}
          calories={recipe.calories}
          dietLabels={recipe.dietLabels}
          healthLabels={recipe.healthLabels}
          label={recipe.label}
          uri={recipe.uri}
          key={recipe.uri}
          onClick={onRecipeSelect}
        />
      ))}
      {openModal && !isEmpty(selectedRecipe) && (
        <RecipeModal
          picture={selectedRecipe.picture}
          label={selectedRecipe.label}
          ingredients={selectedRecipe.ingredients}
          totalNutrients={selectedRecipe.totalNutrients}
          digest={selectedRecipe.digest}
          uri={selectedRecipe.uri}
          onClick={() => {
            setOpenModal(false);
            setSelectedRecipe({} as TSelectedRecipe);
          }}
        />
      )}
    </SearchResultsList>
  );
};
