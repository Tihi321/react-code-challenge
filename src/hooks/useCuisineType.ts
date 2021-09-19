import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { CUISINE_TYPE_OPTIONS } from "../enums/categories";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getCategoryCuisineTypeWith } from "../selectors";

export const useCuisineType = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.CategoryCuisineType);

  const setValues = (terms: string[]) => {
    onStateKeyChange(StateKeys.CategoryCuisineType, terms);
    setLocalStorage(JSON.stringify(terms));
  };

  return {
    values: useStateSelector(getCategoryCuisineTypeWith(stateSelector)) as string[],
    setValues,
    options: CUISINE_TYPE_OPTIONS
  };
}