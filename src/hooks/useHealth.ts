import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { HEALTH_OPTIONS } from "../enums/categories";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getCategoryHealthWith } from "../selectors";

export const useHealth = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.CategoryHealth);

  const setValues = (terms: string[]) => {
    onStateKeyChange(StateKeys.CategoryHealth, terms);
    setLocalStorage(JSON.stringify(terms));
  };

  return {
    values: useStateSelector(getCategoryHealthWith(stateSelector)) as string[],
    setValues,
    options: HEALTH_OPTIONS
  };
}