import { useEffect } from "react";
import { useStateStore } from "ts-use";
import { useLocalStorage } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { initialState } from "./initialState";

export const useContextStateProvider = () => {
  const { onStateChange } = useStateStore();
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

  useEffect(() => {
    onStateChange({
      [StateKeys.Theme]: theme,
      [StateKeys.SearchTerm]: searchTerm,
      [StateKeys.CategoryDiet]: JSON.parse(categoryDiet as string)
    });
    // eslint-disable-next-line
  }, [theme, searchTerm, categoryDiet]);
};
