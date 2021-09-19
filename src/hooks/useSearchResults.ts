import { useStateSelector, useStateStore } from "ts-use";
import get from "lodash/get";
import find from "lodash/find";
import { getSearchResultsObjectWith, getSearchBookmarkedResultsObjectWith, getUseBookmarksStateWith, getSearchResultObjectDataWith } from "../selectors";

export const useSearchResults = () => {
  const { stateSelector } = useStateStore();

  const searchResults = useStateSelector(getSearchResultsObjectWith(stateSelector));
  const bookmarkedResults = useStateSelector(getSearchBookmarkedResultsObjectWith(stateSelector));
  const useBookmarks = useStateSelector(getUseBookmarksStateWith(stateSelector));
  const recipeModalRecipes =useStateSelector(getSearchResultObjectDataWith(stateSelector));

  const getRecipe = (uri: string) => find(recipeModalRecipes, recipe => get(recipe, ["uri"]) === uri);

  return {
    results: useBookmarks ? bookmarkedResults : searchResults,
    getRecipe
  };
}