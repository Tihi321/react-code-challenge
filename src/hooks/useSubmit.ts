import { useStateSelector, useStateStore } from "ts-use";
import { getSearchTermWith } from "../selectors";

export const useSubmit = () => {
  const { stateSelector } = useStateStore();

  const searchTerm = useStateSelector(getSearchTermWith(stateSelector)) as string;

  const submitSearch = () => {
    console.log(searchTerm)
  }

  return {
    submitSearch
  };
}