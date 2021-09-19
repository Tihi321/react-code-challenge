import { useStateSelector, useStateStore } from "ts-use";
import isEmpty from "lodash/isEmpty";
import { getSearchRecipesDataStateWith } from "../selectors";


export const useContent = () => {
  const { stateSelector } = useStateStore();

  const recipeData = useStateSelector(getSearchRecipesDataStateWith(stateSelector));

  return {
    showLoader: isEmpty(recipeData),
  };
}