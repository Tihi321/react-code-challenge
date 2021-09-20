import { useStateSelector, useStateStore } from "ts-use";
import get from "lodash/get";
import find from "lodash/find";
import { getSearchResultsObjectWith, getSearchBookmarkedResultsObjectWith, getUseBookmarksStateWith, getSearchResultObjectDataWith } from "../selectors";
import { StateKeys } from "../enums/store";

export const useSearchResults = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();

  const searchResults = useStateSelector(getSearchResultsObjectWith(stateSelector));
  const bookmarkedResults = useStateSelector(getSearchBookmarkedResultsObjectWith(stateSelector));
  const useBookmarks = useStateSelector(getUseBookmarksStateWith(stateSelector));
  const recipeModalRecipes = useStateSelector(getSearchResultObjectDataWith(stateSelector));

  const getRecipe = (uri: string) => find(recipeModalRecipes, recipe => get(recipe, ["uri"]) === uri);

  const setOverflow = (overflow: boolean) => {
    onStateKeyChange(StateKeys.Overflow, overflow);
  };

  return {
    results: useBookmarks ? bookmarkedResults : searchResults,
    getRecipe,
    setOverflow
  };
}