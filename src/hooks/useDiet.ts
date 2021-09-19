import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { DIET_OPTIONS } from "../enums/categories";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getCategoryDietWith } from "../selectors";

export const useDiet = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.CategoryDiet, "", false);

  const setValues = (terms: string[]) => {
    onStateKeyChange(StateKeys.CategoryDiet, terms);
    setLocalStorage(JSON.stringify(terms));
  };

  return {
    values: useStateSelector(getCategoryDietWith(stateSelector)) as string[],
    setValues,
    options: DIET_OPTIONS
  };
}