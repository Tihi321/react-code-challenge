import { useLocalStorage, useStateSelector, useStateStore } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { getSearchTermWith } from "../selectors";
import { initialState } from "../store/initialState";

export const useSearch = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(
    LocalStorageKeys.SearchTerm,
    initialState.searchTerm
  );


  const searchTerm = useStateSelector(getSearchTermWith(stateSelector)) as string;

  const setSearchTerm = (term: string) => {
    onStateKeyChange(StateKeys.SearchTerm, term);
    setLocalStorage(term);
  };

  return {
    searchTerm,
    setSearchTerm
  };
}