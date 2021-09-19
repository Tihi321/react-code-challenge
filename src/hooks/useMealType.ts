import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { MEAL_TYPE_OPTIONS } from "../enums/categories";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getCategoryMealTypeWith } from "../selectors";

export const useMealType = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.CategoryMealType, "", false);

  const setValues = (terms: string[]) => {
    onStateKeyChange(StateKeys.CategoryMealType, terms);
    setLocalStorage(JSON.stringify(terms));
  };

  return {
    values: useStateSelector(getCategoryMealTypeWith(stateSelector)) as string[],
    setValues,
    options: MEAL_TYPE_OPTIONS
  };
}