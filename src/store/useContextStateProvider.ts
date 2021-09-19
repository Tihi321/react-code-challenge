import { useEffect } from "react";
import { useStateStore } from "ts-use";
import { useLocalStorage } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { initialState } from "./initialState";

export const useContextStateProvider = () => {
  const { onStateObjectChange } = useStateStore();
  const { data: theme } = useLocalStorage(
    LocalStorageKeys.Theme,
    initialState.theme
  );
  const { data: searchTerm } = useLocalStorage(
    LocalStorageKeys.SearchTerm,
    initialState.searchTerm
  );
  const { data: categoryDiet } = useLocalStorage(
    LocalStorageKeys.CategoryDiet,
    JSON.stringify(initialState.categoryDiet)
  );
  const { data: categoryHealth } = useLocalStorage(
    LocalStorageKeys.CategoryHealth,
    JSON.stringify(initialState.categoryHealth)
  );
  const { data: cuisineType } = useLocalStorage(
    LocalStorageKeys.CategoryCuisineType,
    JSON.stringify(initialState.cuisineType)
  );
  const { data: mealType } = useLocalStorage(
    LocalStorageKeys.CategoryMealType,
    JSON.stringify(initialState.mealType)
  );

  useEffect(() => {
    onStateObjectChange({
      [StateKeys.Theme]: theme,
      [StateKeys.SearchTerm]: searchTerm,
      [StateKeys.CategoryDiet]: JSON.parse(categoryDiet as string),
      [StateKeys.CategoryHealth]: JSON.parse(categoryHealth as string),
      [StateKeys.CategoryCuisineType]: JSON.parse(cuisineType as string),
      [StateKeys.CategoryMealType]: JSON.parse(mealType as string)
    });
    // eslint-disable-next-line
  }, [theme, searchTerm, categoryDiet, categoryHealth, cuisineType, mealType]);
};
