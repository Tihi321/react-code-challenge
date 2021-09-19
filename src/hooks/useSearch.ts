import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getSearchTermWith } from "../selectors";

export const useSearch = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.SearchTerm, "", false);

  const setSearchTerm = (term: string) => {
    onStateKeyChange(StateKeys.SearchTerm, term);
    setLocalStorage(term);
  };

  return {
    searchTerm: useStateSelector(getSearchTermWith(stateSelector)) as string,
    setSearchTerm
  };
}